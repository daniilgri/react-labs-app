import styled from "styled-components";
import { device } from "../../../../constants/mediaBreakpoints";

export const Wrapper = styled.div`
  display: grid;
  align-items: start;

  grid-template-columns: 1fr;
  grid-template-rows: 3fr auto;
  grid-row-gap: 4%;

  @media ${device.laptop} {
    grid-template-columns: 3fr auto;
    grid-template-rows: auto;
    grid-column-gap: 4%;
  }
`;

export const Pending = styled.h3``;
