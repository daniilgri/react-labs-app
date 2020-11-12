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

export const NameSection = styled.h4`
  margin: 0;
`;

export const EmailAddress = styled.p``;

export const Controllers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  outline: none;

  color: ${({ color }) => color};

  cursor: pointer;
`;

export const FilledButton = styled.button`
  margin-bottom: 10px;

  background: #f85d4b;
  border-radius: 4px;

  border: 0;

  color: #fff;

  padding: 10px 20px;

  cursor: pointer;

  &:disabled {
    background-color: #f85d4b1a;
  }
`;
