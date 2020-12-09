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

const Component = ({ onChange, values, errors, onTagAdd, onTagDelete }) => {
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
          <Tags onSet={onTagAdd} onDelete={onTagDelete} values={values.tags} errors={errors} />
        </TagsField>
      </Body>
    </Wrapper>
  );
};

Component.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])
  ).isRequired,
  errors: PropTypes.objectOf(PropTypes.object).isRequired,
  onTagAdd: PropTypes.func.isRequired,
  onTagDelete: PropTypes.func.isRequired,
};

export default Component;
