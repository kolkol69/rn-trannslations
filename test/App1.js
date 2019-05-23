import React, { Component } from "react";
import { translate, Trans } from "react-i18next";
import { Platform, Button, Text, View } from "react-native";

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <View style={{ marginTop: 30 }}>
        <View style={{ marginBottom: 30 }} />
        <View>
          <Text>{t("Welcome to React")}</Text>
          <Button title={"de"} onPress={() => changeLanguage("de")} />
          <Button title={"en"} onPress={() => changeLanguage("en")} />
          <Trans i18nKey="startMsg">
            <Text>To get started, edit and save to reload.</Text>
          </Trans>
          <Trans i18nKey="feed_no_change">
            <Text>Data no change. No update is performed. Please click</Text>
          </Trans>
        </View>
      </View>
    );
  }
}

// extended main view with translate hoc
export default translate("translations")(App);
