import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchOrdersInitialRequested,
  cancelOrderRequested,
  fetchOrdersNextRequested,
} from "../../../../store/actions/ordersActions";
import Component from "./Component.jsx";

const mapStateToProps = (state) => ({
  loading: state.orders.loading,
  orders: state.orders.orders,
  error: state.orders.error,
  count: state.orders.count,
  allCount: state.orders.allCount,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      fetchOrdersInitialRequested,
      cancelOrderRequested,
      fetchOrdersNextRequested,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
