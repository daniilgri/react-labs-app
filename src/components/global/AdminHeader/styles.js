import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { device } from "../../../constants/mediaBreakpoints";

export const Wrapper = styled.nav`
  background-color: #232323;
  width: 100%;
  position: relative;
  padding: 10px 0;
  margin-bottom: 40px;

  @media ${device.laptop} {
    display: flex;
    align-items: center;
  }
`;

export const BackLink = styled(Link)`
  font-size: 16px;
  line-height: 51px;

  margin: 0 2%;

  color: #fff;

  text-decoration: none;
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

  font-size: 16px;
  line-height: 20px;

  @media ${device.mobileS} {
    color: #fff;
    &.${activeClassName} {
      color: #fff;
    }
  }
  @media ${device.laptop} {
    border-bottom: 1px solid transparent;
    color: #fff;
    &.${activeClassName} {
      color: #fff;
      border-bottom: 1px solid #fff;
    }
  }
`;

export const MenuToggle = styled.div`
  position: absolute;
  top: 19px;
  right: 20px;
  cursor: pointer;
  color: #fff;
  font-size: 24px;

  @media ${device.laptop} {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
