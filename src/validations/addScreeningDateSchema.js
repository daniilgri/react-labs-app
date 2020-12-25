import * as Yup from "yup";

export default Yup.object().shape({
  date: Yup.date().typeError("Invalid date format"),
  times: Yup.array()
    .of(
      Yup.string()
        .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format")
        .required("Required")
    )
    .required("Required"),
});
