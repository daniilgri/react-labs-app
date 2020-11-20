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

export const ErrorText = styled.label`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: red;
`;

export const ScreeningDatesControllers = styled.div`
  display: flex;
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
  margin-right: 10px;

  padding: 10px 40px;

  &:hover {
    background-color: #e75646;
    transition: all 0.5s;
  }
`;

export const OutlinedButton = styled(FilledButton)`
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #f85d4b;
  color: #f85d4b;

  &:hover {
    background-color: #e7564614;
    border-color: #e75646;
    transition: all 0.5s;
  }
`;

export const ScreeningDatesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ScreeningDateWrapper = styled.li`
  display: flex;
  align-items: center;

  padding: 20px 0;
`;

export const ScreeningDate = styled.p``;

export const ScreeningTimeList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: 40px;
`;

export const ScreeningTime = styled.li`
  display: flex;
  align-items: center;
`;

export const ScreeningDateButtons = styled.div`
  margin-left: auto;
`;

export const BackgroundModal = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;

  background-color: rgba(61, 34, 21, 0.3);

  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
`;
