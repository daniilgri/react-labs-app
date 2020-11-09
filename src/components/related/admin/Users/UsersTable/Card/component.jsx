import React from "react";
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
const component = () => (
  <Wrapper>
    <Image src="https://picsum.photos/800/1200" />
    <InfoSection>
      <NameSection>Daniil Grishaev</NameSection>
      <EmailAddress>grishaev.daniil1@gmail.com</EmailAddress>
      <Controllers>
        <FilledButton>Confirm delete request</FilledButton>
        <Button color="#ff6868">Delete user</Button>
      </Controllers>
    </InfoSection>
  </Wrapper>
);

export default component;
