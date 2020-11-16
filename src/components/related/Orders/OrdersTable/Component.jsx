import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Card from "./Card";
import { Wrapper, Loading } from "./styles";

const Component = ({
  orders,
  loading,
  error,
  fetchOrdersInitialRequested,
  cancelOrderRequested,
}) => {
  useEffect(() => {
    fetchOrdersInitialRequested({ count: 25 });
  }, []);

  let content;

  if (loading || error) {
    content = <Loading>Loading</Loading>;
  } else {
    content =
      orders.length > 0 ? (
        orders.map((item) => (
          <Card key={uuidv4()} value={item} onCancel={cancelOrderRequested} />
        ))
      ) : (
        <Loading>Empty</Loading>
      );
  }

  return <Wrapper>{content}</Wrapper>;
};

Component.defaultProps = {
  orders: [],
  loading: false,
  error: "",
  fetchOrdersInitialRequested: () => {},
  cancelOrderRequested: () => {},
};

Component.propTypes = {
  orders: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchOrdersInitialRequested: PropTypes.func.isRequired,
  cancelOrderRequested: PropTypes.func.isRequired,
};

export default Component;
