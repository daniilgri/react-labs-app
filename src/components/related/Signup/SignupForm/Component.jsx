import React from "react";
import { useFormik } from "formik";
import { Wrapper, Label, Input, SubmitButton } from "./styles";

const Component = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
      <Label htmlFor="confirmPassword">Confirm password*</Label>
      <Input
        id="confirmPassword"
        name="confirmPassword"
        placeholder="confirmPassword"
        type="confirmPassword"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />
      <SubmitButton type="submit">Sign up</SubmitButton>
    </Wrapper>
  );
};

export default Component;
