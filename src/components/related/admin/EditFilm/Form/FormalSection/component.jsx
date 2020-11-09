import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Wrapper,
  Head,
  Title,
  Body,
  Field,
  Label,
  Input,
  ErrorText,
} from "./styles";

const Component = ({ onChange, values, errors }) => {
  return (
    <Wrapper>
      <Head>
        <Title>Formal</Title>
      </Head>
      <Body>
        <Field>
          <Label htmlFor="ticketPrice">Ticket price</Label>
          <Input
            id="ticketPrice"
            name="ticketPrice"
            placeholder="price"
            type="text"
            onChange={onChange}
            value={values.ticketPrice}
          />
          {errors.ticketPrice && <ErrorText>{errors.ticketPrice}</ErrorText>}
        </Field>
      </Body>
    </Wrapper>
  );
};

Component.defaultProps = {
  onChange: () => {},
  values: {},
  errors: {},
};

Component.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default withRouter(Component);
