import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import SearchBar from "../../../../global/SearchBar";
import Card from "./Card";
import { Container, Wrapper, Loading, CenterContainer, FetchButton } from "./styles";

const Component = ({
  loading,
  fetchFilmsAdminPanelInitialRequested,
  films,
  error,
  deleteFilmRequested,
  fetchFilmsAdminPanelNextRequested,
  count,
  allCount,
  query,
  setAdminPanelFilmsSearchQuery,
}) => {
  const handleGetMoreButtonOnClick = event => {
    event.preventDefault();

    if (count < allCount) {
      fetchFilmsAdminPanelNextRequested();
    }
  };

  useEffect(() => {
    fetchFilmsAdminPanelInitialRequested();
    return () => {
      setAdminPanelFilmsSearchQuery("");
    };
  }, []);

  return (
    <>
      <SearchBar
        value={query}
        onSet={setAdminPanelFilmsSearchQuery}
        placeholder="Search by tag..."
      />
      <Container>
        <Wrapper>
          {films.length > 0 &&
            films.map(item => <Card key={uuidv4()} film={item} onDelete={deleteFilmRequested} />)}
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
      </Container>
    </>
  );
};

Component.defaultProps = {
  films: [],
  error: "",
  count: 0,
  allCount: 0,
  query: "",
};

Component.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchFilmsAdminPanelInitialRequested: PropTypes.func.isRequired,
  deleteFilmRequested: PropTypes.func.isRequired,
  fetchFilmsAdminPanelNextRequested: PropTypes.func.isRequired,
  count: PropTypes.number,
  allCount: PropTypes.number,
  query: PropTypes.string,
  setAdminPanelFilmsSearchQuery: PropTypes.func.isRequired,
};

export default Component;
