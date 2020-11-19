import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { useFormik } from "formik";

import loginSchema from "../../../../validations/loginSchema";
import {
  Wrapper,
  Label,
  Input,
  OutlineButton,
  FilledButton,
  Title,
  FieldsWrapper,
  Field,
  ErrorText,
} from "./styles";

const Component = ({ signInRequested, history }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      signInRequested(values);
      history.push("/");
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Title>Login</Title>
      <FieldsWrapper>
        <Field>
          <Label htmlFor="email">E-mail*</Label>
          <Input
            id="email"
            name="email"
            placeholder="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}
        </Field>
        <Field>
          <Label htmlFor="password">Password*</Label>
          <Input
            id="password"
            name="password"
            placeholder="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}
        </Field>
      </FieldsWrapper>

      <FilledButton type="submit">Sign in</FilledButton>
      <OutlineButton to="/signup">Register</OutlineButton>
    </Wrapper>
  );
};

Component.defaultProps = {
  signInRequested: () => {},
};

Component.propTypes = {
  signInRequested: PropTypes.func.isRequired,
};

export default withRouter(Component);
