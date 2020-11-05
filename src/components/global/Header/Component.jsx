import React, { useState, useEffect, useRef } from "react";
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

  const profileSelectRef = useRef(null);

  const handleMenuToggleOnClick = (event) => {
    setActiveMenu((prevState) => !prevState);
  };

  const handleProfileSelectOnClick = (event) => {
    setActiveProfileSelect((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      activeProfileSelect &&
      profileSelectRef.current &&
      !profileSelectRef.current.contains(event.target)
    ) {
      setActiveProfileSelect(false);
    }
  };

  const handleDefaultCloseOptionOnClick = (event) => {
    setActiveProfileSelect(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

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
      </Menu>
      <Select active={activeMenu} ref={profileSelectRef}>
        <SelectIcon onClick={handleProfileSelectOnClick}>
          <FontAwesomeIcon icon={faUserCircle} />
        </SelectIcon>
        <OptionsList active={activeProfileSelect}>
          <Option onClick={handleDefaultCloseOptionOnClick}>
            <StyledLink to="/profile">Profile</StyledLink>
          </Option>
          <Option onClick={handleDefaultCloseOptionOnClick}>
            <StyledLink to="/profile/orders">Orders</StyledLink>
          </Option>
          <Option onClick={handleDefaultCloseOptionOnClick}>Sign out</Option>
          {/* Login or sign up links */}
        </OptionsList>
      </Select>
    </Wrapper>
  );
};

export default Component;
