import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";

import { Wrapper, InputWrapper, Input, IconWrapper } from "./styles";

const Component = ({ setFilmsSearchQuery, query }) => {
  const formik = useFormik({
    initialValues: {
      query: query,
    },
    onSubmit: (values) => {
      setFilmsSearchQuery(values);
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <InputWrapper>
        <Input
          placeholder="Search..."
          name="query"
          id="filmsBoardSearchBar"
          onChange={formik.handleChange}
          value={formik.values.query}
        />
        <IconWrapper type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </IconWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

Component.defaultProps = {
  query: "",
  setFilmsSearchQuery: () => {},
};

Component.propTypes = {
  query: PropTypes.string,
  setFilmsSearchQuery: PropTypes.func.isRequired,
};

export default Component;
