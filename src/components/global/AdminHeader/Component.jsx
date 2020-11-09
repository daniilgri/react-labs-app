import React, { useState, useEffect, useRef } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Wrapper,
  BackLink,
  MenuItem,
  Menu,
  StyledNavLink,
  MenuToggle,
} from "./styles";

const Component = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeProfileSelect, setActiveProfileSelect] = useState(false);

  const profileSelectRef = useRef(null);

  const handleMenuToggleOnClick = (event) => {
    setActiveMenu((prevState) => !prevState);
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
      <BackLink to="/profile">Go to profile</BackLink>
      <Menu active={activeMenu}>
        <MenuItem>
          <StyledNavLink to="/admin/users">Users</StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink exact to="/admin/films">
            Films
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/admin/films/new">New film</StyledNavLink>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default Component;
