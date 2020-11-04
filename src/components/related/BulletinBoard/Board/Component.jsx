import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Card from "./Card";
import { Wrapper, Loading } from "./styles";

const Component = ({ loading, fetchFilmsInitialRequested, films, error }) => {
  useEffect(() => {
    fetchFilmsInitialRequested({ count: 25 });
  }, []);

  let content;

  if (loading) {
    content = <Loading>Loading</Loading>;
  } else {
    content =
      films.length > 0 ? (
        films.map((item) => <Card key={uuidv4()} film={item} />)
      ) : (
        <Loading>Empty</Loading>
      );
  }

  return <Wrapper>{content}</Wrapper>;
};

Component.defaultProps = {
  films: [],
  loading: true,
  error: "",
  fetchFilmsInitialRequested: () => {},
};

Component.propTypes = {
  films: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchFilmsInitialRequested: PropTypes.func.isRequired,
};

export default Component;
