import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

import { Wrapper } from "./styles";

const Component = () => {
  const films = React.useState([1, 2, 3, 4, 5]);

  return (
    <Wrapper>
      {films.map((film) => (
        <Card key={uuidv4()} value={film} />
      ))}
    </Wrapper>
  );
};

export default Component;
