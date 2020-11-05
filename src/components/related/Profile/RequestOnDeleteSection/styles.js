import styled from "styled-components";
import { device } from "../../../../constants/mediaBreakpoints";

export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 40px;
  border: 1px solid #eee2dc;
  padding: 34px 28px;
`;

export const Label = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;
`;

export const Bold = styled.span`
  font-weight: 600;
`;

export const Input = styled.input`
  border: 1px solid #aa6f51;
  border-radius: 3px;

  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  padding: 10px 10px;

  outline: none;

  width: 100%;
  &::placeholder {
    text-align: center;
  }

  @media ${device.laptop} {
    width: 50%;
  }
`;

export const FilledButton = styled.button`
  cursor: pointer;
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
  margin-left: 10px;

  padding: 10px 40px;

  &:hover {
    background-color: #e75646;
    transition: all 0.5s;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
`;
