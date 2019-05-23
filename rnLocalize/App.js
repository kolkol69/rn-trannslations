/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import I18n, { changeLanguage } from "./src/i18n";

export default class App extends Component {
  state = {
    language: "en"
  };

  render() {
    return (
      <View style={{ marginTop: 100, alignSelf: "center" }}>
        <Text>{I18n.t("hello")}</Text>
        <Text>{I18n.t("title.head")}</Text>
        <View style={{ marginBottom: 100 }} />
        <Button
          title={"french"}
          onPress={() => {
            changeLanguage("fr");
            this.setState({
              language: "fr"
            });
          }}
        />
        <Button
          title={"english"}
          onPress={() => {
            changeLanguage("en");
            this.setState({
              language: "en"
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
