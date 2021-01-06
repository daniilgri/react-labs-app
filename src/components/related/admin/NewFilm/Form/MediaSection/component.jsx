import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { Wrapper, Head, Title, Body, Field, Label, Input, ErrorText } from "./styles";

const Component = ({ onImageUpload, errors }) => {
  return (
    <Wrapper>
      <Head>
        <Title>Add media info</Title>
      </Head>
      <Body>
        <Field>
          <Label htmlFor="imageAsFile">Image</Label>
          <Input id="imageAsFile" name="imageAsFile" type="file" onChange={onImageUpload} />
          {errors.imageAsFile && <ErrorText>{errors.imageAsFile}</ErrorText>}
        </Field>
      </Body>
    </Wrapper>
  );
};

Component.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};
export default withRouter(Component);
