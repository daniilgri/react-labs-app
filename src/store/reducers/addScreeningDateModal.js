import { handleActions } from "redux-actions";
import { openModal, closeModal } from "../actions/addScreeningDateModalActions";

export const initialState = {
  open: false,
};

const addScreeningDateModal = handleActions(
  {
    [openModal]: state => {
      return { ...state, open: true };
    },
    [closeModal]: state => {
      return { ...state, open: false };
    },
  },
  initialState
);

export default addScreeningDateModal;
