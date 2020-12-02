import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { closeModal } from "../../../../../../../store/actions/addScreeningDateModalActions";
import Component from "./Component";

const mapStateToProps = state => ({
  isOpen: state.addScreeningDateModal.open,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ closeModal }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
