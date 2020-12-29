import styled from "styled-components";

export const BoardContainer = styled.div`
  margin-bottom: 40px;
  max-width: 85%;
  margin: 0 auto;
  margin-top: 40px;
`;

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin-bottom: 40px;
`;

export const Loading = styled.h3``;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
`;

export const FetchButton = styled.button`
  border: 0;
  background-color: #aa6f51;
  cursor: pointer;
  color: #fff;
  border-radius: 4px;
  padding: 10px 90px;
  outline: none;
  &:hover {
    background-color: #a2684b;
  }
`;
