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

const component = ({ user, onConfirmDeleteRequest, onDelete, currentUser }) => {
  const handleConfirmDeleteRequestButtonOnClick = event => {
    event.preventDefault();

    onConfirmDeleteRequest({ userUid: user.uid });
  };

  const handleDeleteButtonOnClick = event => {
    event.preventDefault();

    onDelete({ userUid: user.uid });
  };

  return (
    <Wrapper>
      <Image src="https://picsum.photos/800/1200" />
      <InfoSection>
        <NameSection>
          {user.firstName}
          {user.lastName}
        </NameSection>
        <EmailAddress>{user.email}</EmailAddress>
        {currentUser.uid !== user.uid && (
          <Controllers>
            <FilledButton
              disabled={!user.requestOnDelete}
              onClick={handleConfirmDeleteRequestButtonOnClick}
            >
              Confirm delete request
            </FilledButton>

            <Button onClick={handleDeleteButtonOnClick} color="#ff6868">
              Delete user
            </Button>
          </Controllers>
        )}
      </InfoSection>
    </Wrapper>
  );
};

component.defaultProps = {
  user: {},
  onConfirmDeleteRequest: () => {},
  onDelete: () => {},
  currentUser: {},
};

component.propTypes = {
  user: PropTypes.objectOf(PropTypes.object).isRequired,
  onConfirmDeleteRequest: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default component;
