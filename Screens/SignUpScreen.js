import React from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import { SignupSchema } from "../Constents/ValidationScheemas";

export default function SignUpScreen() {
  const signupUser = (user) => {
    console.log(user);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => signupUser(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.container}>
              <Input
                label="Email"
                placeholder="example@test.com"
                containerStyle={styles.textBoxStyles}
                leftIcon={<Icon name="envelope" size={18} color="#fff" />}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                errorMessage={touched.email && errors.email}
              />
              <Input
                label="Password"
                placeholder="********"
                //   containerStyle={styles.textBoxStyles}
                leftIcon={<Icon name="lock" size={24} color="#fff" />}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                errorMessage={touched.password && errors.password}
              />
              <Input
                label="Confirm Password"
                placeholder="********"
                leftIcon={<Icon name="lock" size={24} color="#fff" />}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                errorMessage={touched.confirmPassword && errors.confirmPassword}
              />
              <View style={{ paddingBottom: "5%", width: "80%" }}>
                <Button
                  title="SIGN UP AS SELLER"
                  raised={true}
                  buttonStyle={styles.loginButton}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: "50%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  topBar: {
    height: "10%",
    width: "100%",
    backgroundColor: "blue",
  },
  textBoxStyles: {
    paddingTop: "5%",
  },
  loginButton: {
    width: "100%",
    justifyContent: "space-evenly",
  },
});
