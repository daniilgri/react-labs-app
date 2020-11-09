import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;

export const Head = styled.div`
  margin-bottom: 10px;
`;

export const StyledRedirectLink = styled(Link)``;
