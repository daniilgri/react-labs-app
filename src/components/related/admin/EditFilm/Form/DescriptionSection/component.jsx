import React from "react";
import PropTypes from "prop-types";
import Tags from "./Tags";

import {
  Wrapper,
  Head,
  Title,
  Body,
  Field,
  Label,
  Input,
  ErrorText,
  TagsField,
  Textarea,
} from "./styles";

const Component = ({
  onChange,
  title,
  description,
  tags,
  errors,
  onTagAdd,
  onTagDelete,
}) => {
  return (
    <Wrapper>
      <Head>
        <Title>Add description info</Title>
      </Head>
      <Body>
        <Field>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="title"
            type="text"
            onChange={onChange}
            value={title}
          />
          {errors.title && <ErrorText>{errors.title}</ErrorText>}
        </Field>
        <Field>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="..."
            type="text"
            onChange={onChange}
            value={description}
          />
          {errors.description && <ErrorText>{errors.description}</ErrorText>}
        </Field>
        <TagsField>
          <Tags
            onSet={onTagAdd}
            onDelete={onTagDelete}
            values={tags}
            errors={errors}
          />
        </TagsField>
      </Body>
    </Wrapper>
  );
};

Component.defaultProps = {
  onChange: () => {},
  title: "",
  description: "",
  tags: [],
  errors: {},
  onTagAdd: () => {},
  onTagDelete: () => {},
};

Component.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  onTagAdd: PropTypes.func.isRequired,
  onTagDelete: PropTypes.func.isRequired,
};

export default Component;
