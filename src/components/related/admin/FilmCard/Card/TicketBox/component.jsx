import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import {
  Wrapper,
  Title,
  Content,
  OptionList,
  OptionTitle,
  ButtonOption,
  Box,
  TimesList,
  TimeOptionButton,
  DateValue,
} from "./styles";

const Component = ({ screeningDates }) => {
  const listTimes = () => {
    return timeItem => <TimeOptionButton key={uuidv4()}>{timeItem}</TimeOptionButton>;
  };

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
                  <DateValue>{dateItem.date}</DateValue>
                  <TimesList>{dateItem.times.map(listTimes(dateItem))}</TimesList>
                </ButtonOption>
              ))}
          </OptionList>
        </Box>
      </Content>
    </Wrapper>
  );
};

Component.propTypes = {
  screeningDates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Component;
