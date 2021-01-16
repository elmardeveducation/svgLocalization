import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Globus from './assests/svg/Globus';
import strings from './localization';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {update: true};
  }
  //const [update, setUpdate] = useState(true);

  setLocale = (lang) => {
    console.log(lang);
    strings.setLanguage(lang); //set language -mean change language
    //strings.getInterfaceLanguage();   //-- get Phone default language
    console.log('Function state --->>>', strings.getLanguage()); // write to console changed
    this.setState({}); // for re-render component with new language need any setState, possible just {}
  };

  render() {
    console.log('Component state --->>>', strings.getLanguage());
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <TouchableOpacity onPress={() => this.setLocale('he')}>
          <Text>Hebrew</Text>
          <Globus color={'red'} width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setLocale('en')}>
          <Text>English</Text>
          <Globus color={'red'} width={30} height={30} />
        </TouchableOpacity>
        <Test strings={strings} />
        <Text>{strings.textNoInternet}</Text>
      </View>
    );
  }
}

export default App;
