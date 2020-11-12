import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  Image,
  InfoSection,
  NameSection,
  EmailAddress,
  Controllers,
  FilledButton,
  Button,
} from "./styles";

const component = ({ user, onConfirmDeleteRequest, onDelete }) => {
  const handleConfirmDeleteRequestButtonOnClick = (event) => {
    event.preventDefault();

    onConfirmDeleteRequest(user.id);
  };

  const handleDeleteButtonOnClick = (event) => {
    event.preventDefault();

    onDelete(user.id);
  };

  return (
    <Wrapper>
      <Image src="https://picsum.photos/800/1200" />
      <InfoSection>
        <NameSection>
          {user.firstName} {user.lastName}
        </NameSection>
        <EmailAddress>grishaev.daniil1@gmail.com</EmailAddress>
        <Controllers>
          <FilledButton
            disabled={!user.deleteRequest}
            onClick={handleConfirmDeleteRequestButtonOnClick}
          >
            Confirm delete request
          </FilledButton>
          <Button onClick={handleDeleteButtonOnClick} color="#ff6868">
            Delete user
          </Button>
        </Controllers>
      </InfoSection>
    </Wrapper>
  );
};

component.defaultProps = {
  user: {},
  onConfirmDeleteRequest: () => {},
  onDelete: () => {},
};

component.propTypes = {
  user: PropTypes.object.isRequired,
  onConfirmDeleteRequest: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default component;
