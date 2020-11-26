import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Component from "./Component";
import { setFilmsSearchQuery } from "../../../../store/actions/filmsActions";

const mapStateToProps = (state) => ({
  query: state.filmsBoard.query,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ setFilmsSearchQuery }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
