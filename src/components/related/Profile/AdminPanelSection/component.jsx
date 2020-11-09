import React from "react";
import { Wrapper, Head, Title, Body, FilledButton } from "./styles";

const Component = () => (
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
);

export default Component;
