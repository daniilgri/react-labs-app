import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";

import signupSchema from "../../../../validations/signupSchema";
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

const Component = ({ signUpRequested }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values, { resetForm }) => {
      signUpRequested(values);
      resetForm();
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Title>Register</Title>
      <FieldsWrapper>
        <Field>
          <Label htmlFor="email">First name*</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="First name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && <ErrorText>{formik.errors.firstName}</ErrorText>}
        </Field>
        <Field>
          <Label htmlFor="lastName">Last name*</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName && <ErrorText>{formik.errors.lastName}</ErrorText>}
        </Field>
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

      <FilledButton type="submit">Register</FilledButton>
      <OutlineButton to="/login">Sign in</OutlineButton>
    </Wrapper>
  );
};

Component.propTypes = {
  signUpRequested: PropTypes.func.isRequired,
};

export default Component;
