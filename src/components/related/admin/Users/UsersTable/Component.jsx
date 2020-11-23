import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

import { Wrapper, Loading } from "./styles";

const Component = ({
  loading,
  fetchUsersAdminPanelInitialRequested,
  users,
  error,
  deleteUserRequested,
}) => {
  const handleConfirmDeleteRequest = (userUid) => {
    deleteUserRequested(userUid);
  };

  const handleDeleteUser = (userUid) => {
    deleteUserRequested(userUid);
  };

  useEffect(() => {
    fetchUsersAdminPanelInitialRequested({ count: 25 });
  }, []);

  let content;

  if (loading) {
    content = <Loading>Loading</Loading>;
  } else {
    content =
      users.length > 0 ? (
        users.map((item) => (
          <Card
            key={uuidv4()}
            user={item}
            onConfirmDeleteRequest={handleConfirmDeleteRequest}
            onDelete={handleDeleteUser}
          />
        ))
      ) : (
        <Loading>Empty</Loading>
      );
  }

  return <Wrapper>{content}</Wrapper>;
};

Component.defaultProps = {
  users: [],
  loading: true,
  error: "",
  fetchUsersAdminPanelInitialRequested: () => {},
};

Component.propTypes = {
  users: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchUsersAdminPanelInitialRequested: PropTypes.func.isRequired,
};

export default Component;
