import React, { useState } from "react";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Wrapper,
  LogoWrapper,
  MenuItem,
  Menu,
  StyledNavLink,
  MenuToggle,
  Select,
  SelectIcon,
  OptionsList,
  Option,
  StyledLink,
} from "./styles";

const Component = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeProfileSelect, setActiveProfileSelect] = useState(false);

  const handleMenuToggleOnClick = (event) => {
    setActiveMenu((prevState) => !prevState);
  };

  const handleProfileSelectOnClick = (event) => {
    setActiveProfileSelect((prevState) => !prevState);
  };

  return (
    <Wrapper role="custom-dropdown">
      <MenuToggle onClick={handleMenuToggleOnClick}>
        <FontAwesomeIcon icon={faBars} />
      </MenuToggle>
      <LogoWrapper>Logo</LogoWrapper>
      <Menu active={activeMenu}>
        <MenuItem>
          <StyledNavLink to="/">All films</StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/test">Test</StyledNavLink>
        </MenuItem>
      </Menu>
      <Select active={activeMenu}>
        <SelectIcon onClick={handleProfileSelectOnClick}>
          <FontAwesomeIcon icon={faUserCircle} />
        </SelectIcon>
        <OptionsList active={activeProfileSelect}>
          <Option>
            <StyledLink to="/profile">Profile</StyledLink>
          </Option>
          <Option>
            <StyledLink to="/profile/orders">Orders</StyledLink>
          </Option>
          <Option>Sign out</Option>
          {/* Login or sign up links */}
        </OptionsList>
      </Select>
    </Wrapper>
  );
};

export default Component;
