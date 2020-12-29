import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import SearchBar from "../../../global/SearchBar";
import Card from "./Card";
import { Wrapper, Loading, FetchButton, CenterContainer, BoardContainer } from "./styles";

const Component = ({
  loading,
  fetchFilmsInitialRequested,
  films,
  error,
  fetchFilmsNextRequested,
  allCount,
  count,
  setFilmsSearchQuery,
  query,
}) => {
  const handleGetMoreButtonOnClick = event => {
    event.preventDefault();

    if (count < allCount) {
      fetchFilmsNextRequested();
    }
  };

  useEffect(() => {
    fetchFilmsInitialRequested();
  }, []);

  return (
    <>
      <SearchBar value={query} onSet={setFilmsSearchQuery} />
      <BoardContainer>
        <Wrapper>
          {films.length > 0 &&
            films.map(item => (
              <Card key={uuidv4()} title={item.title} id={item.id} image={item.image} />
            ))}
        </Wrapper>
        {loading || error ? (
          <Loading>Loading</Loading>
        ) : (
          count < allCount && (
            <CenterContainer>
              <FetchButton onClick={handleGetMoreButtonOnClick}>Get more</FetchButton>
            </CenterContainer>
          )
        )}
      </BoardContainer>
    </>
  );
};

Component.defaultProps = {
  films: [],
  error: "",
  query: "",
};

Component.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchFilmsInitialRequested: PropTypes.func.isRequired,
  fetchFilmsNextRequested: PropTypes.func.isRequired,
  allCount: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  setFilmsSearchQuery: PropTypes.func.isRequired,
  query: PropTypes.string,
};

export default Component;
