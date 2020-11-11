import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  Image,
  InfoSection,
  Title,
  ScreeningDate,
  Controllers,
  Button,
} from "./styles";
const component = ({ film }) => (
  <Wrapper>
    <Image src="https://picsum.photos/800/1200" />
    <InfoSection>
      <Title>{film.title}</Title>
      <Controllers>
        <Button color="#000">Edit</Button>
        <Button color="#ff6868">Delete</Button>
      </Controllers>
    </InfoSection>
  </Wrapper>
);

export default component;
