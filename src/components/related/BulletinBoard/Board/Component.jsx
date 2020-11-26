import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Card from "./Card";
import { Wrapper, Loading, FetchButton } from "./styles";

const Component = ({
  loading,
  fetchFilmsInitialRequested,
  films,
  error,
  fetchFilmsNextRequested,
  allCount,
  count,
}) => {
  const handleGetMoreButtonOnClick = (event) => {
    event.preventDefault();

    if (count < allCount) {
      fetchFilmsNextRequested();
    }
  };

  useEffect(() => {
    fetchFilmsInitialRequested();
  }, []);

  return (
    <Wrapper>
      {films.length > 0 &&
        films.map((item) => <Card key={uuidv4()} film={item} />)}
      {loading || error ? (
        <Loading>Loading</Loading>
      ) : (
        count < allCount && (
          <FetchButton onClick={handleGetMoreButtonOnClick}>
            Get more
          </FetchButton>
        )
      )}
    </Wrapper>
  );
};

Component.defaultProps = {
  films: [],
  loading: true,
  error: "",
  fetchFilmsInitialRequested: () => {},
  fetchFilmsNextRequested: () => {},
  allCount: 0,
  count: 0,
};

Component.propTypes = {
  films: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchFilmsInitialRequested: PropTypes.func.isRequired,
  fetchFilmsNextRequested: PropTypes.func.isRequired,
  allCount: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default Component;
