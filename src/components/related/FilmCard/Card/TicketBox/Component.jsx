import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { withRouter } from "react-router-dom";

import {
  Wrapper,
  Title,
  Content,
  OptionList,
  OptionTitle,
  ButtonOption,
  DefaultButton,
  AuthController,
  Box,
  Warning,
  TimesList,
  TimeOptionButton,
  DateValue,
  OrderController,
  LinkButton,
} from "./styles";

const Component = ({ screeningDates, loggedIn, onOrder, orderLoading, orderError, history }) => {
  const [chosenDate, setChosenDate] = useState({ date: "", time: "" });

  const handleOrderButtonOnClick = event => {
    event.preventDefault();
    if (loggedIn && chosenDate.date !== "") {
      onOrder({ chosenDate });
      history.push("/profile/orders");
    }
    history.push("/login");
  };

  const handleTimeOptionButtonOnClick = sd => () => {
    if (loggedIn) {
      if (sd.date === chosenDate.date && sd.time === chosenDate.time) {
        setChosenDate({ date: "", time: "" });
      } else {
        setChosenDate(sd);
      }
    }
  };

  const listTimes = dateItem => {
    return timeItem => (
      <TimeOptionButton
        chosen={chosenDate.time === timeItem && chosenDate.date === dateItem.date}
        key={uuidv4()}
        onClick={handleTimeOptionButtonOnClick({
          date: dateItem.date,
          time: timeItem,
        })}
      >
        {timeItem}
      </TimeOptionButton>
    );
  };

  if (orderError) {
    return null;
  }

  return (
    <Wrapper>
      <Title>Ticketing</Title>
      {!loggedIn && <Warning>Login to choose screening date</Warning>}
      <Content>
        <Box>
          <OptionTitle>Day</OptionTitle>
          <OptionList>
            {screeningDates.length > 0 &&
              screeningDates.map(dateItem => (
                <ButtonOption key={uuidv4()}>
                  <DateValue chosen={chosenDate.date === dateItem.date}>{dateItem.date}</DateValue>
                  <TimesList>{dateItem.times.map(listTimes(dateItem))}</TimesList>
                </ButtonOption>
              ))}
          </OptionList>
        </Box>
      </Content>
      {loggedIn ? (
        <OrderController>
          {orderLoading && <Warning>Loading...</Warning>}
          <DefaultButton
            backgroundcolor="#f85d4b"
            type="button"
            onClick={handleOrderButtonOnClick}
            disabled={chosenDate.date === ""}
          >
            Order
          </DefaultButton>
        </OrderController>
      ) : (
        <AuthController>
          <LinkButton backgroundcolor="#8bc34a" to="/signup">
            Sign up
          </LinkButton>
          <LinkButton backgroundcolor="#f85d4b" to="/login">
            Login
          </LinkButton>
        </AuthController>
      )}
    </Wrapper>
  );
};

Component.defaultProps = {
  orderError: "",
};

Component.propTypes = {
  screeningDates: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOrder: PropTypes.func.isRequired,
  orderLoading: PropTypes.bool.isRequired,
  orderError: PropTypes.string,
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Component);
