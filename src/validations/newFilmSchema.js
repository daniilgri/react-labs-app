import * as Yup from "yup";

export default Yup.object().shape({
  title: Yup.string().min(1, "Should have at least 1 character!").required("Required"),
  description: Yup.string().min(6, "Too short").required("Required"),
  ticketPrice: Yup.number().moreThan(0, "Price should be more than 0").required("Required"),
  tags: Yup.array().of(Yup.string()).required("Should have at least 1 tag"),
  screeningDates: Yup.array()
    .of(
      Yup.object().shape({
        date: Yup.string().required("Required"),
        times: Yup.array().of(Yup.string().required("Required")).required("Required"),
      })
    )
    .required("Required"),
});
