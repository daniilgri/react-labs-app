import styled from "styled-components";
import { device } from "../../constants/mediaBreakpoints";

export const Wrapper = styled.div`
  margin-bottom: 40px;
  max-width: 97%;
  margin: 0 auto;

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
