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
      firstNameChange: user.firstName,
      lastNameChange: user.lastName,
    },
    enableReinitialize: true,
    validationSchema: personalInfoSchema,
    onSubmit: values => {
      const changedValues = {};

      Object.entries(values).forEach((value, key) => {
        if (formik.initialValues[key] !== value) {
          changedValues[key] = value;
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
            name="firstNameChange"
            placeholder="First name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstNameChange}
          />
          {formik.errors.firstNameChange && <ErrorText>{formik.errors.firstNameChange}</ErrorText>}
        </Field>
        <Field>
          <Label htmlFor="lastNameChange">Last name</Label>
          <Input
            id="lastNameChange"
            name="lastNameChange"
            placeholder="Last name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastNameChange}
          />
          {formik.errors.lastNameChange && <ErrorText>{formik.errors.lastNameChange}</ErrorText>}
        </Field>
      </Body>
      <FilledButton type="submit">Save</FilledButton>
    </Wrapper>
  );
};

Component.defaultProps = {
  error: "",
};

Component.propTypes = {
  user: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  updateProfileRequested: PropTypes.func.isRequired,
};

export default Component;
