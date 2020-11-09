import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { WithContext as ReactTags } from "react-tag-input";

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
  values,
  errors,
  onTagAdd,
  onTagDelete,
  onTagDrag,
}) => {
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];

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
            value={values.title}
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
            value={values.description}
          />
          {errors.description && <ErrorText>{errors.description}</ErrorText>}
        </Field>
        <TagsField>
          <ReactTags
            tags={values.tags}
            handleDelete={onTagDelete}
            handleAddition={onTagAdd}
            handleDrag={onTagDrag}
            delimiters={delimiters}
            name="tags"
            id="tags"
          />
        </TagsField>
      </Body>
    </Wrapper>
  );
};

Component.defaultProps = {
  onChange: () => {},
  values: {},
  errors: {},
};

Component.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default withRouter(Component);
