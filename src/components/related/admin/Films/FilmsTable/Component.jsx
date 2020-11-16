import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

import { Wrapper, Loading } from "./styles";

const Component = ({
  loading,
  fetchFilmsAdminPanelInitialRequested,
  films,
  error,
  deleteFilmRequested,
}) => {
  useEffect(() => {
    fetchFilmsAdminPanelInitialRequested({ count: 25 });
  }, []);

  let content;

  if (loading || error) {
    content = <Loading>Loading</Loading>;
  } else {
    content =
      films.length > 0 ? (
        films.map((item) => (
          <Card key={uuidv4()} film={item} onDelete={deleteFilmRequested} />
        ))
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
  fetchFilmsAdminPanelInitialRequested: () => {},
  deleteFilmRequested: () => {},
};

Component.propTypes = {
  films: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchFilmsAdminPanelInitialRequested: PropTypes.func.isRequired,
  deleteFilmRequested: PropTypes.func.isRequired,
};

export default Component;
