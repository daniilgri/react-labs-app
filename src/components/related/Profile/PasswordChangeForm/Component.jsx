import React from "react";
import { useFormik } from "formik";
import {
  Wrapper,
  Head,
  Title,
  Body,
  Field,
  Label,
  Input,
  ErrorText,
  FilledButton,
} from "./styles";

const Component = () => {
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Wrapper>
      <Head>
        <Title>Password change</Title>
      </Head>
      <Body>
        <Field>
          <Label htmlFor="currentPassword">Current password</Label>
          <Input
            id="currentPassword"
            name="currentPassword"
            placeholder="Current password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.currentPassword}
          />
          {formik.errors.currentPassword && (
            <ErrorText>{formik.errors.currentPassword}</ErrorText>
          )}
        </Field>
        <Field>
          <Label htmlFor="newPassword">New password</Label>
          <Input
            id="newPassword"
            name="newPassword"
            placeholder="New password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
          />
          {formik.errors.newPassword && (
            <ErrorText>{formik.errors.newPassword}</ErrorText>
          )}
        </Field>
        <Field>
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.errors.confirmPassword && (
            <ErrorText>{formik.errors.confirmPassword}</ErrorText>
          )}
        </Field>
      </Body>
      <FilledButton>Change</FilledButton>
    </Wrapper>
  );
};

export default Component;
