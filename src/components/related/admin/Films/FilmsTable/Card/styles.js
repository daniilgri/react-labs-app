import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 5px 10px 60px rgba(170, 111, 81, 0.1);
`;

export const ImageWrapper = styled(Link)`
  text-decoration: none;
`;

export const Image = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f3f3f3;
  height: 250px;
`;

export const InfoSection = styled.div`
  padding: 4%;
`;

export const Title = styled.h4`
  margin: 0 0 40px 0;
  color: #000;
`;

export const ScreeningDate = styled.p``;

export const Controllers = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 0;

  color: ${({ color }) => color};

  cursor: pointer;
`;

export const LinkButton = styled(Link)`
  background-color: rgba(0, 0, 0, 0);
  border: 0;

  text-decoration: none;

  color: ${({ color }) => color};

  cursor: pointer;
`;
