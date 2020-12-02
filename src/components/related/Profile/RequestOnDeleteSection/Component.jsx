import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";

import { Wrapper, Label, FilledButton, Form, Input, Bold } from "./styles";

const Component = ({
  user,
  loading,
  error,
  requestOnDeleteRequested,
  cancelRequestOnDeleteRequested,
}) => {
  const formik = useFormik({
    initialValues: {
      requestOnDeleteEmail: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (user.email === values.requestOnDeleteEmail) {
        requestOnDeleteRequested({ uid: user.uid });
        resetForm();
      }
    },
  });

  const handleCancelButtonOnClick = event => {
    event.preventDefault();
    cancelRequestOnDeleteRequested({ uid: user.uid });
  };

  if (loading || error) {
    return null;
  }

  return (
    <Wrapper>
      <Label>
        Wanna delete your account? Enter your e-mail address
        <Bold>{user.email}</Bold>
        to confirm
      </Label>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          id="requestOnDeleteEmail"
          name="requestOnDeleteEmail"
          onChange={formik.handleChange}
          value={formik.values.requestOnDeleteEmail}
          disabled={user.requestOnDelete}
        />
        <FilledButton bgColor="#f85d4b" disabled={user.requestOnDelete} type="submit">
          Confirm
        </FilledButton>
        {user.requestOnDelete && (
          <FilledButton bgColor="#e24545" type="button" onClick={handleCancelButtonOnClick}>
            Cancel
          </FilledButton>
        )}
      </Form>
    </Wrapper>
  );
};

Component.defaultProps = {
  user: null,
  error: "",
};

Component.propTypes = {
  user: PropTypes.objectOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  requestOnDeleteRequested: PropTypes.func.isRequired,
  cancelRequestOnDeleteRequested: PropTypes.func.isRequired,
};

export default Component;
