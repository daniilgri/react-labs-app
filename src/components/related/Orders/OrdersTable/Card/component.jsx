import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Image, InfoSection, Title, ScreeningDate, CancelButton } from "./styles";

const component = ({ value, onCancel }) => {
  const handleCancelButtonOnClick = event => {
    event.preventDefault();
    onCancel({ orderId: value.id });
  };

  return (
    <Wrapper>
      <Image src={value.film.image} />
      <InfoSection>
        <Title>{value.film.title}</Title>
        <ScreeningDate>
          {value.screeningDate.date}-{value.screeningDate.time}
        </ScreeningDate>
        <CancelButton onClick={handleCancelButtonOnClick}>Cancel</CancelButton>
      </InfoSection>
    </Wrapper>
  );
};

component.propTypes = {
  value: PropTypes.objectOf(PropTypes.object).isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default component;
