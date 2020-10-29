import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles";

const component = ({ film }) => <Wrapper>{film.title}</Wrapper>;

component.defaultProps = {
  film: {},
};

component.propTypes = {
  film: PropTypes.object.isRequired,
};

export default component;
