import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.form`
  background-color: #fff;
  box-shadow: 5px 10px 60px rgba(170, 111, 81, 0.1);

  padding: 2%;

  display: inline-flex;
  flex-flow: column nowrap;

  border-radius: 4px;
`;

export const Title = styled.h2`
  color: #aa6f51;
  font-size: 32px;
  line-height: 45px;
  text-transform: uppercase;
  margin-bottom: 25px;
  text-align: center;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ErrorText = styled.label`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  margin: 10px 0;
  text-align: center;

  color: #f46f60;
`;

export const Input = styled.input`
  border: 1px solid #aa6f51;
  border-radius: 3px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-top: 5px;

  width: 360px;
  height: 55px;
  padding: 10px 10px;
  outline: none;
  &::placeholder {
    text-align: center;
  }
`;

export const Label = styled.label`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

export const FilledButton = styled.button`
  cursor: pointer;
  width: 360px;
  height: 60px;
  border-radius: 3px;
  border: 0;
  outline: none;
  background-color: #f85d4b;
  color: #fff;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.03em;
  margin-bottom: 10px;

  &:hover {
    background-color: #e75646;
    transition: all 0.5s;
  }
`;

export const OutlineButton = styled(Link)`
  cursor: pointer;
  width: 360px;
  height: 60px;
  border-radius: 3px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.03em;
  margin-bottom: 10px;

  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #f85d4b;
  color: #f85d4b;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;
