import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Head, Title, Body, FilledButton } from "./styles";

const component = ({ user, loading, error }) => {
  return !loading && user.role === "admin" && !error ? (
    <Wrapper>
      <Head>
        <Title>Admin panel</Title>
      </Head>
      <Body>
        <FilledButton to="/admin/users">Users</FilledButton>
        <FilledButton to="/admin/films">Films</FilledButton>
        <FilledButton to="/admin/films/new">New film</FilledButton>
      </Body>
    </Wrapper>
  ) : (
    <h1>Hello</h1>
  );
};

component.defaultProps = {
  error: "",
  user: {
    uid: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "guest",
    requestOnDelete: false,
  },
};

component.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
  ),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default component;
