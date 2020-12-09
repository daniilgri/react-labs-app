import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { useFormik } from "formik";

import DescriptionSection from "./DescriptionSection";
import MediaSection from "./MediaSection";
import FormalSection from "./FormalSection";

import newFilmSchema from "../../../../../validations/newFilmSchema";
import { Wrapper, Head, Title, Body, FilledButton } from "./styles";

const Component = ({ addFilmRequested, history, openAddScreeningDateModal }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      ticketPrice: 0,
      imageAsFile: "",
      tags: [],
      screeningDates: [],
    },
    validationSchema: newFilmSchema,
    onSubmit: values => {
      addFilmRequested(values);
      history.push("/");
    },
  });

  const handleImageUpload = event => {
    event.preventDefault();
    formik.setFieldValue("imageAsFile", event.currentTarget.files[0]);
  };

  const handleScreeningDateAddition = screeningDate => {
    formik.setFieldValue("screeningDates", [...formik.values.screeningDates, screeningDate]);
  };

  const handleScreeningDateDelete = screeningDate => {
    formik.setFieldValue(
      "screeningDates",
      formik.values.screeningDates.filter(sd => sd.date !== screeningDate.date)
    );
  };

  const handleTagAddition = tag => {
    formik.setFieldValue("tags", [...formik.values.tags, tag]);
  };

  const handleTagDelete = tag => {
    formik.setFieldValue(
      "tags",
      formik.values.tags.filter(elTag => elTag !== tag)
    );
  };

  const handleFormOnKeyDown = event => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <Wrapper onKeyDown={handleFormOnKeyDown} onSubmit={formik.handleSubmit}>
      <Head>
        <Title>Add new film</Title>
      </Head>
      <Body>
        <DescriptionSection
          values={formik.values}
          errors={formik.errors}
          onChange={formik.handleChange}
          onTagAdd={handleTagAddition}
          onTagDelete={handleTagDelete}
        />
        <MediaSection errors={formik.errors} onImageUpload={handleImageUpload} />
        <FormalSection
          values={formik.values}
          errors={formik.errors}
          onChange={formik.handleChange}
          onAddScreeningDateModalOpen={openAddScreeningDateModal}
          onScreeningDateAdd={handleScreeningDateAddition}
          onScreeningDateDelete={handleScreeningDateDelete}
        />
      </Body>

      <FilledButton type="submit">Publish</FilledButton>
    </Wrapper>
  );
};

Component.propTypes = {
  addFilmRequested: PropTypes.func.isRequired,
  history: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string, PropTypes.object])
  ).isRequired,
  openAddScreeningDateModal: PropTypes.func.isRequired,
};

export default withRouter(Component);
