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

export default function SignUpScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Input
            label="Email"
            placeholder="example@test.com"
            containerStyle={styles.textBoxStyles}
            leftIcon={<Icon name="envelope" size={18} color="#fff" />}
          />
          <Input
            label="Password"
            placeholder="********"
            //   containerStyle={styles.textBoxStyles}
            leftIcon={<Icon name="lock" size={24} color="#fff" />}
          />
          <Input
            label="Confirm Password"
            placeholder="********"
            leftIcon={<Icon name="lock" size={24} color="#fff" />}
          />
          <View style={{ paddingBottom: "5%", width: "80%" }}>
            <Button
              title="SIGN IN AS SELLER"
              raised={true}
              buttonStyle={styles.loginButton}
            />
          </View>
        </View>
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
