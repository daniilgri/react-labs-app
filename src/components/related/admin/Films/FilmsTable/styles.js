import styled from "styled-components";

import { device } from "../../../../../constants/mediaBreakpoints";

export const Container = styled.div`
  max-width: 97%;
  margin: 40px auto;

  @media ${device.laptop} {
    max-width: 85%;
  }

  @media ${device.laptopL} {
    max-width: 65%;
  }

  @media ${device.desktopL} {
    max-width: 55%;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin-bottom: 40px;
`;

export const Loading = styled.label``;

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
