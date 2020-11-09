import styled from "styled-components";
import Modal from "styled-react-modal";

export const Wrapper = Modal.styled`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 40px;
  border-radius: 4px;
`;

export const Content = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-family: Rozha One;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 45px;
  text-transform: uppercase;

  display: flex;
  justify-content: center;

  color: #aa6f51;

  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 23px;
  right: 23px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #aa6f51;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled.svg`
  margin: 10px 11px 7px 11px;
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
  margin-bottom: 10px;
  padding: 10px 30px;

  &:hover {
    background-color: #e75646;
    transition: all 0.5s;
  }
`;

export const DateInput = styled.input`
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

  margin-bottom: 10px;

  width: 100%;
  &::placeholder {
    text-align: center;
  }
`;

export const TimeSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: -5px;
`;

export const ScreeningTime = styled.div`
  border-radius: 4px;
  color: #fff;
  padding: 5px;
  background-color: #f9796b;
  margin: 5px;

  display: flex;
  align-items: center;
`;

export const ScreeningTimeInputWrapper = styled.div`
  margin: 5px;

  padding: 5px;
  background-color: #f9796b;

  border-radius: 4px;
`;

export const ScreeningTimeInput = styled.input`
  color: #fff;
  border: 0;
  outline: none;
  width: auto;
  background-color: rgba(0, 0, 0, 0);
  &:active {
    color: #fff;
    border: 0;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const ConfirmTimeAddButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  cursor: pointer;
  color: #fff;
`;

export const Field = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const SaveButton = styled.button`
  margin-top: 20px;
  margin-left: auto;

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
  margin-bottom: 10px;
  padding: 10px 30px;

  &:hover {
    background-color: #e75646;
    transition: all 0.5s;
  }
`;

export const ScreeningTimeEditButtons = styled.div``;
