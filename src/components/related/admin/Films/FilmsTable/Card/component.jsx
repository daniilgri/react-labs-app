import React from "react";
import {
  Wrapper,
  Image,
  InfoSection,
  Title,
  ScreeningDate,
  Controllers,
  Button,
} from "./styles";
const component = () => (
  <Wrapper>
    <Image src="https://picsum.photos/800/1200" />
    <InfoSection>
      <Title>Iron man</Title>
      <ScreeningDate>23.11.2020 - 12:00</ScreeningDate>
      <Controllers>
        <Button color="#000">Edit</Button>
        <Button color="#ff6868">Delete</Button>
      </Controllers>
    </InfoSection>
  </Wrapper>
);

export default component;
