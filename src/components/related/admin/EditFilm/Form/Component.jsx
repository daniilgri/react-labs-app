import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { useFormik } from "formik";

import DescriptionSection from "./DescriptionSection";
import MediaSection from "./MediaSection";
import FormalSection from "./FormalSection";

import { Wrapper, Head, Title, Body, FilledButton } from "./styles";

const Component = ({ addFilmRequested, history }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      ticketPrice: 0,
      imageAsFile: "",
      tags: [],
    },
    onSubmit: (values) => {
      console.log(values);

      addFilmRequested(values);
      history.push("/");
    },
  });

  const handleImageUpload = (event) => {
    event.preventDefault();
    formik.setFieldValue("imageAsFile", event.currentTarget.files[0]);
  };

  const handleTagAddition = (tag) => {
    formik.setFieldValue("tags", [...formik.values.tags, tag]);
  };

  const handleTagDelete = (i) => {
    formik.setFieldValue(
      "tags",
      formik.values.tags.filter((tag, index) => index !== i)
    );
  };

  const handleTagDrag = (tag, currPos, newPos) => {
    const { tags } = formik.values;
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    formik.setFieldValue("tags", newTags);
  };

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
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
          onTagDrag={handleTagDrag}
        />
        <MediaSection
          errors={formik.errors}
          onImageUpload={handleImageUpload}
        />
        <FormalSection
          values={formik.values}
          errors={formik.errors}
          onChange={formik.handleChange}
        />
      </Body>

      <FilledButton type="submit">Publish</FilledButton>
    </Wrapper>
  );
};

Component.defaultProps = {
  addFilmRequested: () => {},
};

Component.propTypes = {
  addFilmRequested: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Component);
