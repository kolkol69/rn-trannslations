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
    language: "en",
    name: "Maks"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          <Text>{I18n.t("hello", { name: this.state.name })}</Text>
          {"\n"}
          <Text>{I18n.t("title.head")}</Text>
        </Text>
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
    margin: 10,
    marginBottom: 100,
  },
});
