import React from "react";
import {
  Wrapper,
  Title,
  Content,
  OptionList,
  OptionTitle,
  Option,
  OrderButton,
  Box,
} from "./styles";

const component = () => (
  <Wrapper>
    <Title>Ticketing</Title>
    <Content>
      <Box>
        <OptionTitle>Day</OptionTitle>
        <OptionList>
          <Option>13.01.2020</Option>
          <Option>13.01.2020</Option>
          <Option>13.01.2020</Option>
        </OptionList>
      </Box>
      <Box>
        <OptionTitle>Time</OptionTitle>
        <OptionList>
          <Option>23:00</Option>
          <Option>23:00</Option>
          <Option>23:00</Option>
        </OptionList>
      </Box>
    </Content>
    <OrderButton>Order</OrderButton>
  </Wrapper>
);

export default component;
