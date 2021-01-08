import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { useFormik } from "formik";

import DescriptionSection from "./DescriptionSection";
import MediaSection from "./MediaSection";
import FormalSection from "./FormalSection";

import { Wrapper, Head, Title, Body, FilledButton, Loading, RedirectLink } from "./styles";

const Component = ({
  openAddScreeningDateModal,
  filmId,
  film,
  editFilmRequested,
  fetchEditFilmRequested,
  loading,
  error,
}) => {
  useEffect(() => {
    fetchEditFilmRequested(filmId);
  }, [fetchEditFilmRequested, filmId]);

  const formik = useFormik({
    initialValues: {
      title: film.title,
      description: film.description,
      ticketPrice: film.ticketPrice,
      imageAsFile: film.image,
      previewImage: film.image,
      tags: film.tags,
      screeningDates: film.screeningDates,
    },
    onSubmit: values => {
      const changedValues = {};
      Object.keys(values).forEach(prop => {
        if (formik.initialValues[prop] !== values[prop]) {
          changedValues[prop] = values[prop];
        }
      });
      if (Object.keys(changedValues).length !== 0 && changedValues.constructor === Object) {
        editFilmRequested({ values, changedValues, filmId: film.id });
      }
    },
    enableReinitialize: true,
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

  if (loading || error) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Wrapper onKeyDown={handleFormOnKeyDown} onSubmit={formik.handleSubmit}>
      <Head>
        <Title>Edit film - {film.title}</Title>{" "}
        <RedirectLink to={`/admin/film/${film.id}`}>Go to film card</RedirectLink>
      </Head>
      <Body>
        <DescriptionSection
          title={formik.values.title}
          description={formik.values.description}
          tags={formik.values.tags}
          errors={formik.errors}
          onChange={formik.handleChange}
          onTagAdd={handleTagAddition}
          onTagDelete={handleTagDelete}
        />
        <MediaSection
          errors={formik.errors}
          onImageUpload={handleImageUpload}
          previewImage={formik.values.previewImage}
        />
        <FormalSection
          screeningDates={formik.values.screeningDates}
          ticketPrice={formik.values.ticketPrice}
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

Component.defaultProps = {
  error: "",
  filmId: "",
};

Component.propTypes = {
  editFilmRequested: PropTypes.func.isRequired,
  openAddScreeningDateModal: PropTypes.func.isRequired,
  filmId: PropTypes.string,
  film: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.array])
  ).isRequired,
  fetchEditFilmRequested: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default withRouter(Component);
