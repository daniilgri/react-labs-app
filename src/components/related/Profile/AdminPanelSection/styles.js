import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.form`
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
  display: flex;
  align-items: center;
`;

export const FilledButton = styled(Link)`
  border: 0;
  outline: 0;
  cursor: pointer;
  text-decoration: none;
  background-color: #f85d4b;
  color: #fff;
  border-radius: 4px;
  padding-top: 15px;
  padding-bottom: 13px;
  transition: all 0.5s;

  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  padding: 10px 40px;
  margin-right: 10px;

  &:hover {
    background-color: #e75646;
    transition: all 0.5s;
  }
`;
