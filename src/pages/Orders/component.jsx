import React from "react";

import OrdersTable from "../../components/related/Orders/OrdersTable";
import Header from "../../components/global/Header";
import { Wrapper } from "./styles";

const component = () => (
  <React.Fragment>
    <Header />
    <Wrapper>
      <OrdersTable />
    </Wrapper>
  </React.Fragment>
);

export default component;
