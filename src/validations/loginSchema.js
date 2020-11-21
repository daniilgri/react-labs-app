import * as Yup from "yup";

export default Yup.object().shape({
  emailLogin: Yup.string().email("Invalid email").required("Required"),
  passwordLogin: Yup.string().min(6, "Min 6 characters!").required("Required!"),
});
