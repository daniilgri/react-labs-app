import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { ModalProvider } from "styled-react-modal";
import { v4 as uuidv4 } from "uuid";

import AddScreeningDateModal from "./AddScreeningDateModal";
import {
  Wrapper,
  Head,
  Title,
  Body,
  Field,
  Label,
  Input,
  ErrorText,
  ScreeningDatesControllers,
  FilledButton,
  ScreeningDatesList,
  ScreeningDateWrapper,
  ScreeningDate,
  ScreeningTimeList,
  ScreeningTime,
  OutlinedButton,
  ScreeningDateButtons,
  BackgroundModal,
} from "./styles";

const Component = ({
  onChange,
  values,
  errors,
  onAddScreeningDateModalOpen,
  onScreeningDateAdd,
  onScreeningDateDelete,
}) => {
  const handleAddNewScreeningDateButtonOnClick = event => {
    event.preventDefault();

    onAddScreeningDateModalOpen();
  };

  const handleScreeningDateDeleteButtonOnClick = sd => event => {
    event.preventDefault();

    onScreeningDateDelete(sd);
  };

  return (
    <ModalProvider backgroundComponent={BackgroundModal}>
      <AddScreeningDateModal onScreeningDateAdd={onScreeningDateAdd} />

      <Wrapper>
        <Head>
          <Title>Formal</Title>
        </Head>
        <Body>
          <Field>
            <Label htmlFor="screeningDates">Screening dates:</Label>
            <ScreeningDatesControllers>
              <FilledButton type="button" onClick={handleAddNewScreeningDateButtonOnClick}>
                Add
              </FilledButton>
            </ScreeningDatesControllers>
            {values.screeningDates.length > 0 && (
              <ScreeningDatesList>
                {values.screeningDates.map(elScreeningDate => (
                  <ScreeningDateWrapper key={uuidv4()}>
                    <ScreeningDate>{elScreeningDate.date}</ScreeningDate>
                    <ScreeningTimeList>
                      {elScreeningDate.times.map(elTime => (
                        <ScreeningTime key={uuidv4()}>{elTime}</ScreeningTime>
                      ))}
                    </ScreeningTimeList>
                    <ScreeningDateButtons>
                      <OutlinedButton type="button">Edit</OutlinedButton>
                      <FilledButton
                        onClick={handleScreeningDateDeleteButtonOnClick(elScreeningDate)}
                        type="button"
                      >
                        Delete
                      </FilledButton>
                    </ScreeningDateButtons>
                  </ScreeningDateWrapper>
                ))}
              </ScreeningDatesList>
            )}
            {errors.screeningDates && <ErrorText>{errors.screeningDates}</ErrorText>}
          </Field>
          <Field>
            <Label htmlFor="ticketPrice">Ticket price</Label>
            <Input
              id="ticketPrice"
              name="ticketPrice"
              placeholder="price"
              type="text"
              onChange={onChange}
              value={values.ticketPrice}
            />
            {errors.ticketPrice && <ErrorText>{errors.ticketPrice}</ErrorText>}
          </Field>
        </Body>
      </Wrapper>
    </ModalProvider>
  );
};

Component.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])
  ).isRequired,
  errors: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
  onAddScreeningDateModalOpen: PropTypes.func.isRequired,
  onScreeningDateAdd: PropTypes.func.isRequired,
  onScreeningDateDelete: PropTypes.func.isRequired,
};

export default withRouter(Component);
