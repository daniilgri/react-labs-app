import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

import { Wrapper, Loading } from "./styles";

const Component = ({
  filmId,
  fetchSubscribersRequested,
  users,
  loading,
  error,
}) => {
  const handleConfirmDeleteRequest = (userId) => {};

  const handleDeleteUser = (userId) => {};

  useEffect(() => {
    fetchSubscribersRequested({ filmId, count: 25 });
  }, []);

  let content;

  if (loading || error) {
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
  filmId: "",
  fetchSubscribersRequested: () => {},
  users: [],
  error: "",
  loading: false,
};

Component.propTypes = {
  filmId: PropTypes.string.isRequired,
  fetchSubscribersRequested: PropTypes.func.isRequired,
  users: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Component;
