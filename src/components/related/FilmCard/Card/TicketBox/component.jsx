import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Redirect, withRouter } from "react-router-dom";

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

const Component = ({
  screeningDates,
  user,
  onOrder,
  orderLoading,
  orderError,
  history,
}) => {
  const [chosenDate, setChosenDate] = useState({ date: "", time: "" });

  const handleOrderButtonOnClick = (event) => {
    event.preventDefault();
    if (user) {
      if (chosenDate.date !== "") {
        onOrder({ chosenDate });
        history.push("/profile/orders");
      }
    } else {
      return <Redirect to="/login" />;
    }
  };

  const handleTimeOptionButtonOnClick = (sd) => (event) => {
    setChosenDate(sd);
  };

  const listTimes = (dateItem) => {
    return (timeItem) => (
      <TimeOptionButton
        chosen={chosenDate.time === timeItem}
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

  useEffect(() => {}, [orderLoading]);

  return (
    <Wrapper>
      <Title>Ticketing</Title>
      <Content>
        <Box>
          <OptionTitle>Day</OptionTitle>
          <OptionList>
            {screeningDates.length > 0 &&
              screeningDates.map((dateItem) => (
                <ButtonOption key={uuidv4()}>
                  <DateValue chosen={chosenDate.date === dateItem.date}>
                    {dateItem.date}
                  </DateValue>
                  <TimesList>
                    {dateItem.times.map(listTimes(dateItem))}
                  </TimesList>
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
  screeningDates: [],
  user: null,
  onOrder: () => {},
  orderLoading: false,
  orderError: "",
};

Component.propTypes = {
  screeningDates: PropTypes.array.isRequired,
  user: PropTypes.object,
  onOrder: PropTypes.func.isRequired,
  orderLoading: PropTypes.bool.isRequired,
  orderError: PropTypes.string,
};

export default withRouter(Component);
