import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { Wrapper, List, Item, TagButton, Input, ErrorText } from "./styles";

const Component = ({ onSet, onDelete, values, errors }) => {
  const [tagInput, setTagInput] = useState("");

  const handleInputOnKeyDown = (event) => {
    if (event.key === "Enter") {
      if (!values.includes(tagInput) && !(tagInput === "")) {
        onSet(tagInput);
        setTagInput("");
      }
    }
  };

  const handleDeleteTagButtonOnClick = (tag) => (event) => {
    onDelete(tag);
  };

  const handleInputOnChange = (event) => {
    setTagInput(event.target.value);
  };

  return (
    <Wrapper>
      <List>
        {values.length > 0
          ? values.map((el) => (
              <Item key={uuidv4()}>
                {el}
                <TagButton
                  type="button"
                  onClick={handleDeleteTagButtonOnClick(el)}
                >
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

Component.defaultProps = {
  onSet: () => {},
  onDelete: () => {},
  values: [],
  errors: {},
};

Component.propTypes = {
  onSet: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Component;
