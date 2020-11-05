import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 5px 10px 60px rgba(170, 111, 81, 0.1);
`;

export const Image = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f3f3f3;

  min-height: 250px;
`;

export const InfoSection = styled.div`
  padding: 4%;
`;

export const Title = styled.h4`
  margin: 0;
`;

export const ScreeningDate = styled.p``;

export const CancelButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  outline: none;

  color: red;

  cursor: pointer;
  &:hover {
    color: #ff6868;
  }
`;
