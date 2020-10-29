import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { Wrapper, Label, Input, SubmitButton } from "./styles";

const Component = ({ signInRequested }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      signInRequested(values);
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Label htmlFor="email">E-mail*</Label>
      <Input
        id="email"
        name="email"
        placeholder="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Label htmlFor="password">Password*</Label>
      <Input
        id="password"
        name="password"
        placeholder="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <SubmitButton type="submit">Sign in</SubmitButton>
    </Wrapper>
  );
};

Component.defaultProps = {
  signInRequested: () => {},
};

Component.propTypes = {
  signInRequested: PropTypes.func.isRequired,
};

export default Component;
