import styled from "styled-components";

export const Wrapper = styled.div``;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-flow: row wrap;

  margin: -5px;
`;

export const Item = styled.li`
  margin: 5px;
  padding: 5px;

  background-color: #aa6f5199;
  color: #fff;
  border-radius: 4px;
`;

export const TagButton = styled.button`
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  cursor: pointer;
  outline: none;
`;

export const Input = styled.input`
  margin-top: 10px;

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

  &::placeholder {
    text-align: center;
  }
`;
