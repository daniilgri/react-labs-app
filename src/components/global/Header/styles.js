import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { device } from "../../../constants/mediaBreakpoints";

export const Wrapper = styled.nav`
  background-color: #fdfcfa;
  width: 100%;
  position: relative;
  padding: 10px 0;

  @media ${device.laptop} {
    display: flex;
    align-items: center;
  }
`;

export const LogoWrapper = styled.a`
  margin: 0 2%;

  color: #aa6f51;
  font-family: Rozha One;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 51px;
`;

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;

  ${({ active }) => active && `display: block;`};

  @media ${device.laptop} {
    display: flex;
  }
`;

export const MenuItem = styled.li`
  text-align: center;
  padding: 15px 0;

  width: 100%;
  cursor: pointer;

  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  text-transform: uppercase;

  @media ${device.laptop} {
    margin-right: 15px;
    width: auto;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  text-decoration: none;

  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  text-transform: uppercase;
  @media ${device.mobileS} {
    color: #000;
    &.${activeClassName} {
      color: #aa6f51;
    }
  }
  @media ${device.laptop} {
    border-bottom: 1px solid transparent;
    color: #000;
    &.${activeClassName} {
      color: #000;
      border-bottom: 1px solid #aa6f51;
    }
  }
`;

export const MenuToggle = styled.div`
  position: absolute;
  top: 10x;
  right: 20px;
  cursor: pointer;
  color: #aa6f51;
  font-size: 24px;

  @media ${device.laptop} {
    display: none;
  }
`;

export const Select = styled.div`
  position: relative;

  background-color: #f7f7f7;

  display: none;
  flex-direction: column;
  align-items: center;

  ${({ active }) => active && `display: flex;`};

  @media ${device.laptop} {
    display: flex;
    margin-left: auto;
    margin-right: 2%;

    background-color: rgba(0, 0, 0, 0);
  }
`;

export const SelectIcon = styled.div`
  cursor: pointer;
  font-size: 46px;

  width: 100%;

  text-align: center;

  @media ${device.laptop} {
    font-size: 36px;
  }
`;

export const OptionsList = styled.div`
  display: none;

  width: auto;

  ${({ active }) => active && `display: flex; flex-direction: column;`};

  @media ${device.laptop} {
    position: absolute;
    top: 100%;
    right: 0;
    box-shadow: 5px 10px 60px rgba(170, 111, 81, 0.1);
  }
`;

export const OptionLink = styled(Link)`
  cursor: pointer;

  padding: 15px;

  text-align: center;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;

  white-space: nowrap;

  @media ${device.laptop} {
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export const Option = styled.div`
  cursor: pointer;

  padding: 15px;

  text-align: center;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;

  white-space: nowrap;

  @media ${device.laptop} {
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
