import React, { Component } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/i18n";
import Example from "./src/Example";

export default class App extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Example />
      </I18nextProvider>
    );
  }
}
