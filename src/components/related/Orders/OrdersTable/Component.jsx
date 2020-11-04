import React from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "./Card";
import { Wrapper } from "./styles";

const Component = () => {
  const [orders] = React.useState([1, 2, 3, 4, 5]);
  return (
    <Wrapper>
      {orders.map((order) => (
        <Card key={uuidv4()} value={order} />
      ))}
    </Wrapper>
  );
};

export default Component;
