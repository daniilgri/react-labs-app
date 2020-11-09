import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

import { Wrapper } from "./styles";

const Component = () => {
  const users = React.useState([1, 2, 3, 4, 5]);

  return (
    <Wrapper>
      {users.map((user) => (
        <Card key={uuidv4()} value={user} />
      ))}
    </Wrapper>
  );
};

export default Component;
