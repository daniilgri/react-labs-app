import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";

import { Wrapper, InputWrapper, Input, IconWrapper } from "./styles";

const Component = ({ onSet, value, placeholder }) => {
  const formik = useFormik({
    initialValues: {
      query: value,
    },
    onSubmit: values => {
      onSet(values.query);
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <InputWrapper>
        <Input
          placeholder={placeholder}
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
  placeholder: "Search...",
};

Component.propTypes = {
  value: PropTypes.string,
  onSet: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Component;
