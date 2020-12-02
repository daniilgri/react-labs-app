import styled from "styled-components";

export const Wrapper = styled.form`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 40px;
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

  padding: 10px 40px;

  &:hover {
    background-color: #e75646;
    transition: all 0.5s;
  }
`;
