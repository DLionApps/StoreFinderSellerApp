import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, Card } from "react-native-elements";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Text h3 style={styles.welcomeText}>
          Store Finder
        </Text>
        <Button
          title="LOG IN"
          raised={true}
          buttonStyle={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        />
        <Text h6 style={styles.newUserText}>
          New to Store Finder? Try it for free
        </Text>
        <Button
          title="SIGN UP"
          type="clear"
          onPress={() => navigation.navigate("Signup")}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    color: "black",
    paddingTop: "15%",
    paddingBottom: "10%",
    textAlign: "center",
  },
  newUserText: {
    paddingTop: "5%",
  },
  card: {
    height: "70%",
    width: "80%",
    alignItems: "center",
  },
});
