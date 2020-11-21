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
      emailLogin: "",
      passwordLogin: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      signInRequested({
        email: values.emailLogin,
        password: values.passwordLogin,
      });
      history.push("/");
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Title>Login</Title>
      <FieldsWrapper>
        <Field>
          <Label htmlFor="emailLogin">E-mail*</Label>
          <Input
            id="emailLogin"
            name="emailLogin"
            placeholder="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.emailLogin}
          />
          {formik.errors.emailLogin && (
            <ErrorText>{formik.errors.emailLogin}</ErrorText>
          )}
        </Field>
        <Field>
          <Label htmlFor="passwordLogin">Password*</Label>
          <Input
            id="passwordLogin"
            name="passwordLogin"
            placeholder="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.passwordLogin}
          />
          {formik.errors.passwordLogin && (
            <ErrorText>{formik.errors.passwordLogin}</ErrorText>
          )}
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
