import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import SearchBar from "../../../../global/SearchBar";
import Card from "./Card";
import { Wrapper, Loading, CenterContainer, FetchButton, Container } from "./styles";

const Component = ({
  loading,
  fetchUsersAdminPanelInitialRequested,
  users,
  error,
  deleteUserRequested,
  allCount,
  count,
  fetchUsersAdminPanelNextRequested,
  currentUser,
  loadingCurrentUser,
  errorCurrentUser,
  setUsersSearchQuery,
  query,
}) => {
  const handleGetMoreButtonOnClick = event => {
    event.preventDefault();

    if (count < allCount) {
      fetchUsersAdminPanelNextRequested();
    }
  };

  const handleConfirmDeleteRequest = userUid => {
    deleteUserRequested(userUid);
  };

  const handleDeleteUser = userUid => {
    deleteUserRequested(userUid);
  };

  useEffect(() => {
    fetchUsersAdminPanelInitialRequested();
  }, []);

  return (
    <>
      <SearchBar
        onSet={setUsersSearchQuery}
        value={query}
        placeholder="Search by first name, last name or email..."
      />
      <Container>
        <Wrapper>
          {users.length > 0 &&
            users.map(item => (
              <Card
                key={uuidv4()}
                currentUser={currentUser}
                user={item}
                onConfirmDeleteRequest={handleConfirmDeleteRequest}
                onDelete={handleDeleteUser}
              />
            ))}
        </Wrapper>
        {loading || error || loadingCurrentUser || errorCurrentUser ? (
          <Loading>Loading</Loading>
        ) : (
          count < allCount && (
            <CenterContainer>
              <FetchButton onClick={handleGetMoreButtonOnClick}>Get more</FetchButton>
            </CenterContainer>
          )
        )}
      </Container>
    </>
  );
};

Component.defaultProps = {
  users: [],
  error: "",
  count: 0,
  allCount: 0,
  errorCurrentUser: "",
  currentUser: {
    uid: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "guest",
    requestOnDelete: false,
  },
  query: "",
};

Component.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchUsersAdminPanelInitialRequested: PropTypes.func.isRequired,
  fetchUsersAdminPanelNextRequested: PropTypes.func.isRequired,
  count: PropTypes.number,
  allCount: PropTypes.number,
  deleteUserRequested: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
  ),
  loadingCurrentUser: PropTypes.bool.isRequired,
  errorCurrentUser: PropTypes.string,
  setUsersSearchQuery: PropTypes.func.isRequired,
  query: PropTypes.string,
};

export default Component;
