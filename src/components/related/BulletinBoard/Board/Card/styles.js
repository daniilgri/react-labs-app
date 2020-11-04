import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  min-height: 350px;
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f3f3f3;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  box-shadow: 5px 10px 60px rgba(170, 111, 81, 0.1);
`;

export const BottomInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
`;

export const Title = styled.p`
  margin: 0;
  padding: 0;
  color: #fff;
  padding: 10px 5px;
`;
