import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Image,
  InfoSection,
  Title,
  ScreeningDate,
  CancelButton,
} from "./styles";

const component = ({ value }) => (
  <Wrapper>
    <Image src="https://picsum.photos/800/1200" />
    <InfoSection>
      <Title>Iron man</Title>
      <ScreeningDate>23.11.2020 - 12:00</ScreeningDate>
      <CancelButton>Cancel</CancelButton>
    </InfoSection>
  </Wrapper>
);

export default component;
