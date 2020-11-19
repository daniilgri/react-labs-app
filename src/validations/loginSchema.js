import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 characters!").required("Required!"),
});
