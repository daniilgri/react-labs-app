import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";

import { Wrapper, InputWrapper, Input, IconWrapper } from "./styles";

const Component = ({ onSet, value }) => {
  const formik = useFormik({
    initialValues: {
      query: value,
    },
    onSubmit: values => {
      onSet(values);
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
  value: "",
};

Component.propTypes = {
  value: PropTypes.string,
  onSet: PropTypes.func.isRequired,
};

export default Component;
