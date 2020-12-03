import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Redirect } from "react-router-dom";

import {
  Wrapper,
  Title,
  Content,
  OptionList,
  OptionTitle,
  ButtonOption,
  OrderButton,
  Box,
  TimesList,
  TimeOptionButton,
  DateValue,
  Loading,
} from "./styles";

const Component = ({ screeningDates, user, onOrder, orderLoading, orderError }) => {
  const [chosenDate, setChosenDate] = useState({ date: "", time: "" });

  const handleOrderButtonOnClick = event => {
    event.preventDefault();
    if (user && chosenDate.date !== "") {
      onOrder({ chosenDate });
      return <Redirect to="/profile/orders" />;
    }
    return <Redirect to="/login" />;
  };

  const handleTimeOptionButtonOnClick = sd => () => {
    setChosenDate(sd);
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
      {orderLoading && <Loading>Loading...</Loading>}
      <OrderButton type="button" onClick={handleOrderButtonOnClick}>
        Order
      </OrderButton>
    </Wrapper>
  );
};

Component.defaultProps = {
  user: null,
  orderError: "",
};

Component.propTypes = {
  screeningDates: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.objectOf(PropTypes.object),
  onOrder: PropTypes.func.isRequired,
  orderLoading: PropTypes.bool.isRequired,
  orderError: PropTypes.string,
};

export default Component;
