import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";

import addScreeningDateSchema from "../../../../../../../validations/addScreeningDateSchema";
import {
  Wrapper,
  Content,
  Title,
  DateInput,
  TimeSection,
  FilledButton,
  ScreeningTime,
  Field,
  Label,
  SaveButton,
  ScreeningTimeInput,
  ScreeningTimeInputWrapper,
  ConfirmTimeAddButton,
  ScreeningTimeEditButtons,
} from "./styles";

const Component = ({ closeModal, isOpen, onScreeningDateAdd }) => {
  const [screeningTimeInputActive, setScreeningTimeInputActive] = useState(
    false
  );
  const [screeningTimeValue, setScreeningTimeValue] = useState("");

  const formik = useFormik({
    initialValues: {
      date: "",
      times: [],
    },
    validationSchema: addScreeningDateSchema,
    onSubmit: (values, { resetForm }) => {
      onScreeningDateAdd(values);

      setScreeningTimeInputActive(false);
      setScreeningTimeValue("");
      resetForm();
      closeModal();
    },
  });

  const handleScreeningTimeAddition = (event) => {
    event.preventDefault();

    formik.setFieldValue("times", [screeningTimeValue, ...formik.values.times]);

    setScreeningTimeValue("");
    setScreeningTimeInputActive(false);
  };

  const handleScreeningTimeCancel = (event) => {
    event.preventDefault();

    setScreeningTimeValue("");
    setScreeningTimeInputActive(false);
  };

  const handleAddTimeButtonOnClick = (event) => {
    event.preventDefault();

    setScreeningTimeValue("");
    setScreeningTimeInputActive((prevState) => !prevState);
  };

  const handleScreeningTimeOnChange = (event) => {
    setScreeningTimeValue(event.target.value);
  };

  const handleScreeningTimeItemDelete = (sdTime) => (event) => {
    event.preventDefault();

    formik.setFieldValue(
      "times",
      formik.values.times.filter((el) => el !== sdTime)
    );
  };

  return (
    <Wrapper
      isOpen={isOpen}
      onBackgroundClick={closeModal}
      onEscapeKeydown={closeModal}
    >
      <Content onSubmit={formik.handleSubmit}>
        <Title>Add screening date</Title>
        <Field>
          <Label>Date:</Label>
          <DateInput
            id="date"
            name="date"
            placeholder="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
        </Field>
        <FilledButton type="button" onClick={handleAddTimeButtonOnClick}>
          Add time
        </FilledButton>
        <TimeSection>
          {screeningTimeInputActive && (
            <ScreeningTimeInputWrapper>
              <ScreeningTimeInput
                id="screeningTime"
                name="screeningTime"
                onChange={handleScreeningTimeOnChange}
                value={screeningTimeValue}
              />
              <ConfirmTimeAddButton onClick={handleScreeningTimeAddition}>
                +
              </ConfirmTimeAddButton>
              <ConfirmTimeAddButton onClick={handleScreeningTimeCancel}>
                -
              </ConfirmTimeAddButton>
            </ScreeningTimeInputWrapper>
          )}
          {formik.values.times.map((el) => (
            <ScreeningTime key={uuidv4()}>
              {el}
              <ScreeningTimeEditButtons>
                <ConfirmTimeAddButton
                  onClick={handleScreeningTimeItemDelete(el)}
                >
                  -
                </ConfirmTimeAddButton>
              </ScreeningTimeEditButtons>
            </ScreeningTime>
          ))}
        </TimeSection>
        <SaveButton type="submit">Save</SaveButton>
      </Content>
    </Wrapper>
  );
};

Component.defaultProps = {
  closeModal: () => {},
  isOpen: false,
  onScreeningDateAdd: () => {},
};

Component.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onScreeningDateAdd: PropTypes.func.isRequired,
};

export default Component;
