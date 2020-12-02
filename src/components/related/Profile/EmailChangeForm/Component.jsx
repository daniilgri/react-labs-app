import React from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";

import emailChangeSchema from "../../../../validations/emailChangeSchema";
import { Wrapper, Head, Title, Body, Field, Label, Input, ErrorText, FilledButton } from "./styles";

const Component = ({ changeEmailRequested }) => {
  const formik = useFormik({
    initialValues: {
      emailChange: "",
      passwordConfirmEmail: "",
    },
    validationSchema: emailChangeSchema,
    onSubmit: (values, { resetForm }) => {
      changeEmailRequested({
        email: values.emailChange,
        password: values.passwordConfirmEmail,
      });
      resetForm();
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit} autoComplete="off">
      <Head>
        <Title>Email change</Title>
      </Head>
      <Body>
        <Field>
          <Label htmlFor="emailChange">Email</Label>
          <Input
            id="emailChange"
            name="emailChange"
            placeholder="New email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.emailChange}
            autocomplete="nope"
          />
          {formik.errors.emailChange && <ErrorText>{formik.errors.emailChange}</ErrorText>}
        </Field>
        <Field>
          <Label htmlFor="passwordConfirmEmail">Password to confirm email change</Label>
          <Input
            id="passwordConfirmEmail"
            name="passwordConfirmEmail"
            placeholder="Current password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirmEmail}
            autocomplete="new-password"
          />
          {formik.errors.passwordConfirmEmail && (
            <ErrorText>{formik.errors.passwordConfirmEmail}</ErrorText>
          )}
        </Field>
      </Body>
      <FilledButton type="submit">Change</FilledButton>
    </Wrapper>
  );
};

Component.propTypes = {
  changeEmailRequested: PropTypes.func.isRequired,
};

export default Component;
