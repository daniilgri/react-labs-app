import React from "react";
import { Wrapper, Label, FilledButton, Form, Input, Bold } from "./styles";

const component = () => (
  <Wrapper>
    <Label>
      Wanna delete your account? Enter your e-mail address{" "}
      <Bold>(xyz@gmail.com)</Bold> to confirm
    </Label>
    <Form>
      <Input />
      <FilledButton>Confirm</FilledButton>
    </Form>
  </Wrapper>
);

export default component;
