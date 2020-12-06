import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 5px 10px 60px rgba(170, 111, 81, 0.1);
  padding: 20px 40px;
`;

export const Title = styled.h3`
  font-size: 28px;
`;

export const Content = styled.div`
  display: flex;
`;

export const Box = styled.div`
  flex-basis: 50%;
`;

export const OptionTitle = styled.h5`
  font-size: 20px;
  margin: 0;
`;

export const OptionList = styled.ul`
  list-style: none;
  margin: 30px 0;
  padding: 0;

  display: flex;
  flex-direction: column;
`;

export const ButtonOption = styled.li`
  margin: 10px 0;
`;

export const DateValue = styled.div``;

export const OrderButton = styled.button`
  background: #f85d4b;
  border-radius: 4px;

  font-size: 18px;
  color: #ffffff;

  border: 0;

  width: 330px;
  height: 60px;

  cursor: pointer;

  outline: none;
`;

export const TimesList = styled.ul`
  list-style: none;
`;

export const TimeOptionButton = styled.li`
  margin: 10px 0;

  color: #fff;
  background-color: #aa6f51c7;
  padding: 4px 8px;
  border-radius: 4px;

  cursor: pointer;

  ${({ chosen }) => chosen && `background-color: #7d4d34c7;`};

  &:hover {
    background-color: #bf8567;
    transition: all 0.1s;
  }
`;

export const Loading = styled.label`
  color: red;
`;

export const OrderController = styled.div`
  display: flex;
  flex-direction: column;
`;
