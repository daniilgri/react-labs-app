import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

import { Wrapper, Loading, CenterContainer, FetchButton } from "./styles";

const Component = ({
  filmId,
  fetchSubscribersInitialRequested,
  users,
  loading,
  error,
  allCount,
  count,
  fetchSubscribersNextRequested,
}) => {
  const handleGetMoreButtonOnClick = event => {
    event.preventDefault();

    if (count < allCount) {
      fetchSubscribersNextRequested({ filmId });
    }
  };

  useEffect(() => {
    fetchSubscribersInitialRequested({ filmId });
  }, []);

  return (
    <>
      <Wrapper>
        {users.length > 0 && users.map(item => <Card key={uuidv4()} user={item} />)}
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
    </>
  );
};

Component.defaultProps = {
  users: [],
  error: "",
  count: 0,
  allCount: 0,
  filmId: "",
};

Component.propTypes = {
  filmId: PropTypes.string,
  fetchSubscribersInitialRequested: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  count: PropTypes.number,
  allCount: PropTypes.number,
  fetchSubscribersNextRequested: PropTypes.func.isRequired,
};

export default Component;
