import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  Image,
  InfoSection,
  NameSection,
  EmailAddress,
} from "./styles";

const component = ({ user }) => {
  return (
    <Wrapper>
      <Image src="https://picsum.photos/800/1200" />
      <InfoSection>
        <NameSection>
          {user.firstName} {user.lastName}
        </NameSection>
        <EmailAddress>{user.email}</EmailAddress>
      </InfoSection>
    </Wrapper>
  );
};

component.defaultProps = {
  user: {},
};

component.propTypes = {
  user: PropTypes.object.isRequired,
};

export default component;
