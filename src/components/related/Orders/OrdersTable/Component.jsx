import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Card from "./Card";
import { Wrapper, Loading, CenterContainer, FetchButton } from "./styles";

const Component = ({
  orders,
  loading,
  error,
  fetchOrdersInitialRequested,
  cancelOrderRequested,
  count,
  allCount,
  fetchOrdersNextRequested,
}) => {
  const handleGetMoreButtonOnClick = event => {
    event.preventDefault();

    if (count < allCount) {
      fetchOrdersNextRequested();
    }
  };

  useEffect(() => {
    fetchOrdersInitialRequested();
  }, [fetchOrdersInitialRequested]);

  return (
    <>
      <Wrapper>
        {orders.length > 0 &&
          orders.map(item => <Card key={uuidv4()} value={item} onCancel={cancelOrderRequested} />)}
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
  error: "",
  count: 0,
  allCount: 0,
  orders: [],
};

Component.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchOrdersInitialRequested: PropTypes.func.isRequired,
  cancelOrderRequested: PropTypes.func.isRequired,
  count: PropTypes.number,
  allCount: PropTypes.number,
  fetchOrdersNextRequested: PropTypes.func.isRequired,
};

export default Component;
