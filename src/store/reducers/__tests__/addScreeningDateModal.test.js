import addScreeningDateModal, { initialState } from "../addScreeningDateModal";
import { closeModal, openModal } from "../../actions/addScreeningDateModalActions";

describe("addScreeningDateModal reducer", () => {
  it("should return initial state", () => {
    expect(addScreeningDateModal(undefined, {})).toEqual(initialState);
  });
  it("should handle openModal", () => {
    expect(addScreeningDateModal(initialState, openModal())).toEqual({ open: true });
  });
  it("should handle closeModal", () => {
    expect(addScreeningDateModal(initialState, closeModal())).toEqual({ open: false });
  });
});
