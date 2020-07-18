import React, { useState } from "react";
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
import { LoginSchema } from "../Constents/ValidationScheemas";

export default function LoginScreen() {
  // const [user, setUser] = useState({});
  const loginUser = (user) => {
    // api call
    console.log(user);
  };

  const resetPassword = () => {
    // api call
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      {/* <View style={styles.topBar}></View> */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => loginUser(values)}
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
              <View style={{ paddingBottom: "5%", width: "80%" }}>
                <Button
                  title="LOG IN"
                  raised={true}
                  buttonStyle={styles.loginButton}
                  onPress={handleSubmit}
                />
              </View>
              <View style={{ paddingBottom: "5%", width: "80%" }}>
                <Button
                  title="FORGOT PASSWORD?"
                  raised={true}
                  buttonStyle={[
                    styles.loginButton,
                    { backgroundColor: "gray" },
                  ]}
                  onPress={() => {
                    resetPassword();
                  }}
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
    //   height: "50%",
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
