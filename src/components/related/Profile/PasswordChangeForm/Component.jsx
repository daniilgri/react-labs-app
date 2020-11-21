import React from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";

import changePasswordSchema from "../../../../validations/changePasswordSchema";
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

const Component = ({ changePasswordRequested }) => {
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPasswordChange: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit: (values) => {
      changePasswordRequested({
        password: values.currentPassword,
        newPassword: values.newPassword,
      });
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
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
          <Label htmlFor="confirmPasswordChange">Confirm password</Label>
          <Input
            id="confirmPasswordChange"
            name="confirmPasswordChange"
            placeholder="Confirm password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPasswordChange}
          />
          {formik.errors.confirmPasswordChange && (
            <ErrorText>{formik.errors.confirmPasswordChange}</ErrorText>
          )}
        </Field>
      </Body>
      <FilledButton>Change</FilledButton>
    </Wrapper>
  );
};

Component.defaultProps = {
  changePasswordRequested: () => {},
};

Component.propTypes = {
  changePasswordRequested: PropTypes.func.isRequired,
};

export default Component;
