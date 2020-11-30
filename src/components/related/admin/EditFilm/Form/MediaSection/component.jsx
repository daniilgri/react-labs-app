import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Wrapper,
  Head,
  Title,
  Body,
  Field,
  Label,
  Input,
  ErrorText,
  ImagePreview,
} from "./styles";

const Component = ({ onImageUpload, errors, imagePreviewSrc }) => {
  return (
    <Wrapper>
      <Head>
        <Title>Add media info</Title>
      </Head>
      <Body>
        <ImagePreview alt="preview" src={imagePreviewSrc} />
        <Field>
          <Label htmlFor="imageAsFile">Image</Label>
          <Input
            id="imageAsFile"
            name="imageAsFile"
            type="file"
            onChange={onImageUpload}
          />
          {errors.imageAsFile && <ErrorText>{errors.imageAsFile}</ErrorText>}
        </Field>
      </Body>
    </Wrapper>
  );
};

Component.defaultProps = {
  onImageUpload: () => {},
  errors: {},
  imagePreviewSrc: "",
};

Component.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  imagePreviewSrc: PropTypes.string.isRequired,
};
export default withRouter(Component);
