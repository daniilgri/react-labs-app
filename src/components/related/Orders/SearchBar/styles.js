import styled from "styled-components";
import { device } from "../../../../constants/mediaBreakpoints";

export const Wrapper = styled.div`
  background-color: #aa6f510d;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    padding: 20px 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  background-color: #fff;

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.laptop} {
    width: 50%;
  }
`;

export const Input = styled.input`
  border: 0;
  outline: 0;

  border-radius: 4px;

  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  padding: 10px;
  background-color: rgba(0, 0, 0, 0);

  width: 100%;
`;

export const IconWrapper = styled.div`
  margin: 0 15px;
  margin-left: auto;
`;
