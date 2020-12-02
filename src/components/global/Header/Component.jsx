import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
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
  OptionLink,
} from "./styles";

const Component = ({ user, loading, error, signOutRequested }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeProfileSelect, setActiveProfileSelect] = useState(false);

  const profileSelectRef = useRef(null);

  const handleMenuToggleOnClick = () => {
    setActiveMenu(prevState => !prevState);
  };

  const handleProfileSelectOnClick = () => {
    setActiveProfileSelect(prevState => !prevState);
  };

  const handleClickOutside = event => {
    if (
      activeProfileSelect &&
      profileSelectRef.current &&
      !profileSelectRef.current.contains(event.target)
    ) {
      setActiveProfileSelect(false);
    }
  };

  const handleDefaultCloseOptionOnClick = event => {
    setActiveProfileSelect(false);
  };

  const handleSignOutOptionOnClick = event => {
    event.preventDefault();
    signOutRequested();
    setActiveProfileSelect(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Wrapper>
      <MenuToggle onClick={handleMenuToggleOnClick}>
        <FontAwesomeIcon icon={faBars} />
      </MenuToggle>
      <LogoWrapper>Logo</LogoWrapper>
      <Menu active={activeMenu}>
        <MenuItem>
          <StyledNavLink to="/">All films</StyledNavLink>
        </MenuItem>
      </Menu>
      {!loading && !error && (
        <Select active={activeMenu} ref={profileSelectRef}>
          <SelectIcon onClick={handleProfileSelectOnClick}>
            <FontAwesomeIcon icon={faUserCircle} />
          </SelectIcon>
          <OptionsList active={activeProfileSelect}>
            {user ? (
              <>
                <OptionLink to="/profile" onClick={handleDefaultCloseOptionOnClick}>
                  Profile
                </OptionLink>
                <OptionLink to="/profile/orders" onClick={handleDefaultCloseOptionOnClick}>
                  Orders
                </OptionLink>
                <Option onClick={handleSignOutOptionOnClick}>Sign out</Option>
              </>
            ) : (
              <>
                <OptionLink to="/login" onClick={handleDefaultCloseOptionOnClick}>
                  Login
                </OptionLink>
                <OptionLink to="/signup" onClick={handleDefaultCloseOptionOnClick}>
                  Sign up
                </OptionLink>
              </>
            )}
          </OptionsList>
        </Select>
      )}
    </Wrapper>
  );
};

Component.defaultProps = {
  user: null,
  loading: false,
  error: "",
  signOutRequested: () => {},
};

Component.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  signOutRequested: PropTypes.func.isRequired,
};

export default Component;
