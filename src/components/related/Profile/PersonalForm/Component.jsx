import React from "react";
import PropTypes from "prop-types";
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
  Loading,
} from "./styles";

const Component = ({ user, loading, error }) => {
  const formik = useFormik({
    initialValues: {
      firstName: user.firstName, // fix
      lastName: user.lastName, // fix
      email: user.email,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  if (loading || error) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Wrapper>
      <Head>
        <Title>Personal information</Title>
      </Head>
      <Body>
        <Field>
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="First name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && (
            <ErrorText>{formik.errors.firstName}</ErrorText>
          )}
        </Field>
        <Field>
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName && (
            <ErrorText>{formik.errors.lastName}</ErrorText>
          )}
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}
        </Field>
      </Body>
      <FilledButton type="submit">Save</FilledButton>
    </Wrapper>
  );
};

Component.defaultProps = {
  user: null,
  loading: false,
  error: "",
};

Component.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Component;
