import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Wrapper, InputWrapper, Input, IconWrapper } from "./styles";

const Component = () => (
  <Wrapper>
    <InputWrapper>
      <Input placeholder="Search..." />
      <IconWrapper>
        <FontAwesomeIcon icon={faSearch} />
      </IconWrapper>
    </InputWrapper>
  </Wrapper>
);

export default Component;
