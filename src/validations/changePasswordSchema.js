import * as Yup from "yup";

export default Yup.object().shape({
  currentPassword: Yup.string()
    .min(6, "Min 6 characters!")
    .required("Required!"),
  newPassword: Yup.string().min(6, "Min 6 characters!").required("Required!"),
  confirmPasswordChange: Yup.string().oneOf(
    [Yup.ref("newPassword"), null],
    "Passwords must match!"
  ),
});
