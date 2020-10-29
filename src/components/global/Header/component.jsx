import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, SignOutButton } from "./styles";

const component = () => (
  <Wrapper>
    <Link to="/">All Films</Link>
    <SignOutButton>Sign out</SignOutButton>
  </Wrapper>
);

export default component;
