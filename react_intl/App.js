/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { IntlProvider, addLocaleData } from "react-intl";
import { FormattedMessage } from "react-intl-native";
// import CustomComponent from "./Component";
import en from "react-intl/locale-data/en";
import el from "react-intl/locale-data/el";
addLocaleData([...en, ...el]);

let i18nConfig = {
  en: {
    messages: {
      "home.welcome": "Wellcome {name}!",
      "home.declarative": "Manifest",
      "home.declarative.p1": `To {name} makes it unhelpful to create interactive user interfaces.
             Design simple views for each state on your own
                   application and React will effectively update and
             will yield the right data when your data
                   changes. `,
      "home.declarative.p2":
        "Expression views make the code more predictable and easier to detect errors.",
      "home.component-based": "Based on data",
      "home.component-based.p1":
        "Create embedded elements that handle their own state, and then compose them to create a composite UI",
      "home.component-based.p2":
        "Since component logic is written in JavaScript instead of templates, you can easily pass rich data\n" +
        "                  through your app and keep your status off of & nbsp; DOM."
    }
  },
  el: {
    messages: {
      "home.welcome": "Καλώς 'Ηρθατε στο {name}!",
      "home.declarative": "Δηλωτικό",
      "home.declarative.p1":
        "To {name} καθιστά ανώφελη τη δημιουργία διαδραστικών διεπαφών χρήστη. Σχεδιάστε απλές προβολές για κάθε κράτος στο δικό σας\n" +
        "                εφαρμογή και το React θα ενημερώσει αποτελεσματικά και θα αποδώσει τα σωστά στοιχεία όταν τα δεδομένα σας\n" +
        "                αλλαγές.",
      "home.declarative.p2":
        "Οι δηλωτικές προβολές καθιστούν τον κώδικα πιο προβλέψιμο και πιο εύκολο στον εντοπισμό σφαλμάτων.",
      "home.component-based": "Βασισμένο σε στοιχεία",
      "home.component-based.p1":
        "Δημιουργήστε ενσωματωμένα στοιχεία που διαχειρίζονται τη δική τους κατάσταση, και στη συνέχεια συνθέστε τα για να δημιουργήσετε σύνθετα UI.",
      "home.component-based.p2":
        "Δεδομένου ότι η λογική συνιστωσών είναι γραμμένη σε JavaScript αντί για πρότυπα, μπορείτε εύκολα να περάσετε πλούσια δεδομένα\n" +
        "                  μέσω της εφαρμογής σας και να κρατήσετε την κατάσταση εκτός του & nbsp; DOM."
    }
  }
};

export default class App extends Component {
  state = {
    locale: "en"
  };
  changeLang = () => {
    const locale = this.state.locale === "en" ? "el" : "en";
    this.setState({ locale });
  };
  render() {
    return (
      <IntlProvider
        locale={this.state.locale}
        messages={i18nConfig[this.state.locale].messages}
      >
        <View style={styles.container}>
          {/* <CustomComponent date={"date-timee"} /> */}
          <View style={styles.instructions}>
            <Button title={"Change lang"} onPress={this.changeLang} />
            <FormattedMessage id="home.welcome" values={{ name: "React.js" }} />
            <View>
              <FormattedMessage id="home.declarative" />
              <View>
                <FormattedMessage
                  id="home.declarative.p1"
                  values={{ name: <Text style={{fontWeight: "500"}}>React</Text> }}
                />
                <FormattedMessage id="home.declarative.p2" />
              </View>
            </View>
            <FormattedMessage id="home.component-based" />
            <FormattedMessage id="home.component-based.p1" />
            <FormattedMessage id="home.component-based.p2" />
          </View>
        </View>
      </IntlProvider>
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
    marginTop: 10,
    padding: 15
  }
});
