import * as Yup from "yup";

export default Yup.object().shape({
  emailChange: Yup.string().email("Invalid email").required("Required"),
  passwordConfirmEmail: Yup.string()
    .min(6, "Min 6 characters!")
    .required("Required!"),
});
