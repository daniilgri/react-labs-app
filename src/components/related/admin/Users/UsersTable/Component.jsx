import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

import { Wrapper, Loading, CenterContainer, FetchButton } from "./styles";

const Component = ({
  loading,
  fetchUsersAdminPanelInitialRequested,
  users,
  error,
  deleteUserRequested,
  allCount,
  count,
  fetchUsersAdminPanelNextRequested,
}) => {
  const handleGetMoreButtonOnClick = (event) => {
    event.preventDefault();

    if (count < allCount) {
      fetchUsersAdminPanelNextRequested();
    }
  };

  const handleConfirmDeleteRequest = (userUid) => {
    deleteUserRequested(userUid);
  };

  const handleDeleteUser = (userUid) => {
    deleteUserRequested(userUid);
  };

  useEffect(() => {
    fetchUsersAdminPanelInitialRequested();
  }, []);

  return (
    <React.Fragment>
      <Wrapper>
        {users.length > 0 &&
          users.map((item) => (
            <Card
              key={uuidv4()}
              user={item}
              onConfirmDeleteRequest={handleConfirmDeleteRequest}
              onDelete={handleDeleteUser}
            />
          ))}
      </Wrapper>
      {loading || error ? (
        <Loading>Loading</Loading>
      ) : (
        count < allCount && (
          <CenterContainer>
            <FetchButton onClick={handleGetMoreButtonOnClick}>
              Get more
            </FetchButton>
          </CenterContainer>
        )
      )}
    </React.Fragment>
  );
};

Component.defaultProps = {
  users: [],
  loading: true,
  error: "",
  fetchUsersAdminPanelInitialRequested: () => {},
  fetchUsersAdminPanelNextRequested: () => {},
  count: 0,
  allCount: 0,
  deleteUserRequested: () => {},
};

Component.propTypes = {
  users: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchUsersAdminPanelInitialRequested: PropTypes.func.isRequired,
  fetchUsersAdminPanelNextRequested: PropTypes.func.isRequired,
  count: PropTypes.number,
  allCount: PropTypes.number,
  deleteUserRequested: PropTypes.func.isRequired,
};

export default Component;
