import React, {
  Component,
  PureComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Globus from './assests/svg/Globus';
import strings from './localization';
import Test from './test';

const App = () => {
  const [update, setUpdate] = useState(true);

  const setLocale = (lang) => {
    console.log(lang);
    strings.setLanguage(lang);
    strings.getInterfaceLanguage();
    console.log('Function state --->>>', strings.getLanguage());
    setUpdate(!update);
  };

  useEffect(() => {}, [update]);
  console.log('Component state --->>>', strings.getLanguage());
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <TouchableOpacity onPress={() => setLocale('he')}>
        <Text>Hebrew</Text>
        <Globus color={'red'} width={30} height={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLocale('en')}>
        <Text>English</Text>
        <Globus color={'red'} width={30} height={30} />
      </TouchableOpacity>
      <Test strings={strings} />
      <Text>{strings.textNoInternet}</Text>
    </View>
  );
};

export default App;
