import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchOrdersInitialRequested,
  cancelOrderRequested,
} from "../../../../store/actions/ordersActions";
import Component from "./Component.jsx";

const mapStateToProps = (state) => ({
  loading: state.orders.loading,
  orders: state.orders.orders,
  error: state.orders.error,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { fetchOrdersInitialRequested, cancelOrderRequested },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
