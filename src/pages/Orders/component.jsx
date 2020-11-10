import React from "react";

import OrdersTable from "../../components/related/Orders/OrdersTable";
import Header from "../../components/global/Header";
import SearchBar from "../../components/related/Orders/SearchBar";
import { Wrapper } from "./styles";

const component = () => (
  <React.Fragment>
    <Header />
    <SearchBar />
    <Wrapper>
      <OrdersTable />
    </Wrapper>
  </React.Fragment>
);

export default component;
