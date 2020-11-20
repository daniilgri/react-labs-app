import styled from "styled-components";
import { device } from "../../../../../../constants/mediaBreakpoints";

export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 40px;
  border: 1px solid #eee2dc;
  padding: 34px 28px;
`;

export const Head = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Title = styled.h2`
  color: #aa6f51;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  padding-bottom: 11px;
  margin-top: 0;
`;

export const Body = styled.div`
  margin-bottom: 20px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;
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

  outline: 1;
  outline-color: #d4b7a8;

  width: 100%;
  &::placeholder {
    text-align: center;
  }

  @media ${device.laptop} {
    width: 50%;
  }
`;

export const Textarea = styled.textarea`
  flex-basis: 50%;
  width: 100%;
  border: 1px solid #aa6f51;
  border-radius: 3px;
  outline: 1;
  outline-color: #d4b7a8;
  padding: 12px 12px;
  resize: none;
  color: #000;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  &::-webkit-scrollbar {
    width: 5px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    cursor: pointer;
    -webkit-box-shadow: inset 0 0 6px #d4b7a8;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d4b7a8;
    outline: 1px solid slategrey;
    cursor: pointer;
  }

  &::placeholder {
    color: #000000b5;
    text-align: center;
  }
  &:-ms-input-placeholder {
    color: #000000b5;
    text-align: center;
  }
  &::-webkit-input-placeholder {
    color: #000000b5;
    text-align: center;
  }
  &:-moz-placeholder {
    color: #000000b5;
    text-align: center;
  }
  &::-moz-placeholder {
    color: #000000b5;
    text-align: center;
  }
`;

export const ErrorText = styled.label`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: red;
`;

export const TagsField = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
