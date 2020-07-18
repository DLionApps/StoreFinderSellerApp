import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  email: Yup.string()
    .email("Valid email required")
    .required("Email is required"),
});

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup.string()
    .required("Confirme password is required")
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm passwords must match with password"
    ),
  email: Yup.string()
    .email("Valid email required")
    .required("Email is required"),
  //   consent: Yup.bool()
  //     .test(
  //       "consent",
  //       "You have to agree with our Terms and Conditions!",
  //       (value) => value === true
  //     )
  //     .required("You have to agree with our Terms and Conditions!"),
});

//https://itnext.io/simple-react-form-validation-with-formik-yup-and-or-spected-206ebe9e7dcc
export { LoginSchema, SignupSchema };
