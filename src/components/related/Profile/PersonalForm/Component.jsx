import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";

import personalInfoSchema from "../../../../validations/personalInfoSchema";
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
  Loading,
} from "./styles";

const Component = ({ user, loading, error, updateProfileRequested }) => {
  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
    },
    enableReinitialize: true,
    validationSchema: personalInfoSchema,
    onSubmit: values => {
      const changedValues = {};
      Object.keys(values).forEach(prop => {
        if (formik.initialValues[prop] !== values[prop]) {
          changedValues[prop] = values[prop];
        }
      });

      if (Object.keys(changedValues).length !== 0 && changedValues.constructor === Object) {
        updateProfileRequested(changedValues);
      }
    },
  });

  if (loading || error) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Head>
        <Title>Personal information</Title>
      </Head>
      <Body>
        <Field>
          <Label htmlFor="firstNameChange">First name</Label>
          <Input
            id="firstNameChange"
            name="firstName"
            placeholder="First name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && <ErrorText>{formik.errors.firstName}</ErrorText>}
        </Field>
        <Field>
          <Label htmlFor="lastNameChange">Last name</Label>
          <Input
            id="lastNameChange"
            name="lastName"
            placeholder="Last name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName && <ErrorText>{formik.errors.lastName}</ErrorText>}
        </Field>
      </Body>
      <FilledButton type="submit">Save</FilledButton>
    </Wrapper>
  );
};

Component.defaultProps = {
  error: "",
  user: {
    uid: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "guest",
    requestOnDelete: false,
  },
};

Component.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  updateProfileRequested: PropTypes.func.isRequired,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
  ),
};

export default Component;
