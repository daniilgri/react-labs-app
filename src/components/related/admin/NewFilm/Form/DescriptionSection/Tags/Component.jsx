import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { Wrapper, List, Item, TagButton, Input, ErrorText } from "./styles";

const Component = ({ onSet, onDelete, values, errors }) => {
  const [tagInput, setTagInput] = useState("");

  const handleInputOnKeyDown = event => {
    if (event.key === "Enter") {
      if (!values.includes(tagInput) && !(tagInput === "")) {
        onSet(tagInput);
        setTagInput("");
      }
    }
  };

  const handleDeleteTagButtonOnClick = tag => () => {
    onDelete(tag);
  };

  const handleInputOnChange = event => {
    setTagInput(event.target.value);
  };

  return (
    <Wrapper>
      <List>
        {values.length > 0
          ? values.map(el => (
              // eslint-disable-next-line react/jsx-indent
              <Item key={uuidv4()}>
                {el}
                <TagButton type="button" onClick={handleDeleteTagButtonOnClick(el)}>
                  -
                </TagButton>
              </Item>
            ))
          : null}
      </List>
      <Input
        onKeyDown={handleInputOnKeyDown}
        placeholder="Type tag"
        name="tagInput"
        id="tagInput"
        value={tagInput}
        onChange={handleInputOnChange}
      />
      {errors.tags && <ErrorText>{errors.tags}</ErrorText>}
    </Wrapper>
  );
};

Component.propTypes = {
  onSet: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  values: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Component;
