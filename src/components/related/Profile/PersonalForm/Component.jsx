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
    initialValues: { firstName: "", lastName: "", email: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
      <FilledButton>Save</FilledButton>
    </Wrapper>
  );
};

export default Component;
