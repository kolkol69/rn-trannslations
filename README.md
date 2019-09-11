# rn-trannslations
Comparison of different React Native translation libraries

1. [react-native-localize](https://github.com/react-native-community/react-native-localize)
2. [react-i18next](https://github.com/i18next/react-i18next)
3. [fbt](https://github.com/facebookincubator/fbt)
4. [linguiJS](https://lingui.js.org/)
5. [react-intl-native](https://github.com/frostney/react-intl-native)

- react-native-localize
Text is translated as we are changing the default phone language
Could be changed on the fly, but there is no built-in method to do this, so you should create one by yourself, as soon as you change the language manually you should trigger re-render so changes are displayed
In my opinion, the good option is to use this library in combination with other translation libraries when you need to trigger language change according to the change of the default language. 

- react-i18next
Master Branch is the new v10 using hooks.
react-native: not yet supports hooks (hooks are part of react-native v0.59.0) For the legacy version please use the v9.x.x Branch
Works pretty smooth. Quite easy to install, you have to wrap your App component to make It work. There is an option to change the language manually but no API to get the default language of the device. Two ways of implementing the translations, default - using function, where param is a translate key, and a more complex way - component <Trans/>. This is my personal best choice. There is an option to use an extraction tool to get all the string from your code and add it to translation files. To ease the workflow of translation you can use a translation management system built around the i18next ecosystem - locize.com.
- fbt
Couldn’t find the way to install it.
In getting started section on the website of the fbt, there is only shown how to clone repo and how to build\start it, that’s it, so I guess it’s now only suitable for web projects, as there isn’t enough information about how to use it or even if it is compatible with react-native. In my opinion, you can get it working but there is no need to make such an effort while there are better solutions on the market 
- linguiJS

NOTE: I could get it running in 2\3 cases, it sometimes requests you to download some additional dependencies, not sure if its a problem on my side or there is something wrong with that library when using it with RN. I would recommend it as the best one IMO, but it was hard to get it running

Very good documented library. If you are looking for something with ICU Message Format than linguijs might be a thing for you. It has its own cli for managing translation extraction/compilation, the main difference from other libraries is that the main way to get translations is simply to write them inside of <Trans>. You are adding locales thru cli, with a command like `yarn add-locale en cs`, then you are extracting strings from <Trans>text</Trans> and i18n.t\`text\` format (i18n._(t\`text\`) in versions 2.2+) and the final step is to compile those messages to js

Use ICU Message Format

NOTE: The latest version of @lingui/react working out-of-the-box for React Native on Android is 2.2. Newer versions depend on the Intl object which is not available on the JavaScriptCore that is used on Android by default. See the JSC build scripts for Android for a possible solution or use the Intl polyfill.

__HOW TO:__

1. `react-native init linguijs_demo`

2. `cd linguijs_demo`

3. `npm install --save @lingui/react@2.2 (For react-native,as for 24.05.19, you should use 2.2 version) `

4. `npm install --save-dev @lingui/babel-preset-react @lingui/cli @lingui/macro babel-core@7.0.0-bridge.0 babel-plugin-macros  `

5. Create `.linguirc` with this inside:

```{
  
  "localeDir": "src/locales/",
   "srcPathDirs": ["./src/"],
   "format": "minimal",
   "sourceLocale": "en"
}
```

  6. Edit babel.config.js so it has inside:
```
  module.exports = {
    presets: [
      "module:metro-react-native-babel-preset",
      "@lingui/babel-preset-react",
    ],
    plugins: ["macros"]
  };
  ```
  7. Create an src folder in the root folder of your project and add files you want to be translated later inside this folder (or any other but you need to edit .linguirc file where it says srcPathDir
  8. Create src/locales folder, place where you want your translations to appear, if you want to use the different folder you should update localeDir filed in .linguirc file
  9. When you add files according to docs or example inside rn_linguijs, you should start the translation creating phase. 
  10. Add this under “script” in your package.json: 
  ```
    "add-locale": "lingui add-locale",
    "extract": "lingui extract",
    "compile": "lingui compile",
    "ios": "react-native run-ios"
  ```
Last one is not necessary, its just to speed up your flow rebuilding app on iOS
  
11. Now when we updated our scripts list we can use them. Run `yarn add-locale` with parameters for desired languages, I will use English an Czech, so I need to run `yarn add-locale en cs`
As soon as you get ‘done’ message, run `yarn extract`, this will get all the strings in <Trans>text</Trans> and i18n.t`text` format (i18n._(t`text`) in versions 2.2+) and make a JSON file for each language, English is default, so you don’t need to change it, but you will need to edit translations for Czech.
After running `yarn extract` you will see table with chosen languages and column “missing”, for default language it is always `-` because we assume that id === translation (example: “Message” : “Message”), but for Czech we need to provide translations, so in order to see translation for different languages you should go to /src/locales/cs/messages.json and add translation. You will see “Message” : “< placeYourTranslationHere >”, that’s the place where you place your translations (< placeYourTranslationHere > is a placeholder to pay your attention, default its empty string)
When you finish adding translations run `yarn extract` one more time to check “missing” column so you will know that no translation is missed, if it says 0 for all languages except the default one (‘-‘ for default) you can move on to the compilation
Run `yarn compile`, and you will create message.js in each language folder, this is the translation file you will use to load your translations
i18nInstanceHolder.js has a basic setup, loading the English language as default, and loading Czech if user needs it (on button press in demo.)
For more information please refer to docs and in case of any questions feel free to ask me 
- react-intl-native

One more easy to use solution. There is no built-in API to change language but it can be easily done with you custom solution. Configuration is also super easy. API is based on using components for different purposes such as FormattedPlural, FormattedMessage, and other <Formatted* /> components. As a value for < Formatted* > you can use not only strings but also RN’s components (example: <Text>) with custom style.

## Conclusion

The easiest to set up yet one of the most useful libraries is react-i18next. It can be used in combination with react-native-localize if you want to use its default phone's language detection. LinguiJS is also a powerful library but it took me to much time to get it working, so I can’t be sure that you won’t come across the same issue. React-intl-native could be used as an alternative to react-i18next, but it is far less popular, and it has smaller functionality comparing to react-i18next. Can't add anything about the fbt as I couldn't run and test it on my own, so I do not recommend it, at least for now, as IMO it lacks some documentation, both for React and React Native. Some basic test examples can be found in my [repo](https://github.com/kolkol69/rn-trannslations).
