import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { useFormik } from "formik";

import { Wrapper, Form, Label, Input, PublishButton } from "./styles";

const Component = ({ addFilmRequested, history }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      ticketPrice: 0,
    },
    onSubmit: (values) => {
      addFilmRequested(values);
      history.push("/");
    },
  });

  return (
    <Wrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          name="description"
          placeholder="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <Label htmlFor="ticketPrice">Ticket price</Label>
        <Input
          id="ticketPrice"
          name="ticketPrice"
          placeholder="price"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.ticketPrice}
        />
        <PublishButton type="submit">Publish</PublishButton>
      </Form>
    </Wrapper>
  );
};

Component.defaultProps = {
  addFilmRequested: () => {},
};

Component.propTypes = {
  addFilmRequested: PropTypes.func.isRequired,
};

export default withRouter(Component);
