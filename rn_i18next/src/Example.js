import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { translate, Trans } from "react-i18next";

class Example extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          <Text>{t("Welcome to React")}</Text>
          {"\n"}
          <Trans i18nKey="common:infoText">
            <Text style={styles.bold}>
              <Text style={styles.bold}>One </Text>
              <Text style={styles.light}>Two </Text>
              <Text style={styles.bold}>Three </Text>
              <Text style={styles.light}>Four </Text>
              <Text style={styles.bold}>Five </Text>
            </Text>
          </Trans>
        </Text>
        <Button title={"de"} onPress={() => changeLanguage("de")} />
        <Button title={"en"} onPress={() => changeLanguage("en")} />
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
  bold: {
    fontWeight: 'bold',
  },
  light: {
    fontWeight: 'normal',
  },
});

export default translate("translations")(Example);
