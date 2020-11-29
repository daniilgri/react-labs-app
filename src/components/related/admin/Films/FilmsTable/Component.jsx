import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

import { Wrapper, Loading, CenterContainer, FetchButton } from "./styles";

const Component = ({
  loading,
  fetchFilmsAdminPanelInitialRequested,
  films,
  error,
  deleteFilmRequested,
  fetchFilmsAdminPanelNextRequested,
  count,
  allCount,
}) => {
  const handleGetMoreButtonOnClick = (event) => {
    event.preventDefault();

    if (count < allCount) {
      fetchFilmsAdminPanelNextRequested();
    }
  };

  useEffect(() => {
    fetchFilmsAdminPanelInitialRequested();
  }, []);

  return (
    <React.Fragment>
      <Wrapper>
        {films.length > 0 &&
          films.map((item) => (
            <Card key={uuidv4()} film={item} onDelete={deleteFilmRequested} />
          ))}
      </Wrapper>
      {loading || error ? (
        <Loading>Loading</Loading>
      ) : (
        count < allCount && (
          <CenterContainer>
            <FetchButton onClick={handleGetMoreButtonOnClick}>
              Get more
            </FetchButton>
          </CenterContainer>
        )
      )}
    </React.Fragment>
  );
};

Component.defaultProps = {
  films: [],
  loading: true,
  error: "",
  fetchFilmsAdminPanelInitialRequested: () => {},
  deleteFilmRequested: () => {},
  fetchFilmsAdminPanelNextRequested: () => {},
  count: 0,
  allCount: 0,
};

Component.propTypes = {
  films: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchFilmsAdminPanelInitialRequested: PropTypes.func.isRequired,
  deleteFilmRequested: PropTypes.func.isRequired,
  fetchFilmsAdminPanelNextRequested: PropTypes.func.isRequired,
  count: PropTypes.number,
  allCount: PropTypes.number,
};

export default Component;
