import * as Yup from "yup";

export default Yup.object().shape({
  date: Yup.string().required("Required"),
  times: Yup.array().of(Yup.string().required("Required")).required("Required"),
});
