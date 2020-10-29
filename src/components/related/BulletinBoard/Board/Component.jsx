import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Card from "./Card";
import { Wrapper, Pending } from "./styles";

const Component = ({ loading, fetchFilmsInitialRequested, films, error }) => {
  useEffect(() => {
    fetchFilmsInitialRequested({ count: 25 });
  }, []);

  if (loading) {
    return <Pending>Loading</Pending>;
  }

  return (
    <Wrapper>
      {films.map((item) => (
        <Card key={uuidv4()} film={item} />
      ))}
    </Wrapper>
  );
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
