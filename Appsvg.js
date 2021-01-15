import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Globus from './assests/svg/Globus';
import localeText from './localization';

class App extends Component {
  constructor(props){
    super(props);
  }

  setLocale(){
    localeText.setLanguage('he');
    localeText.getInterfaceLanguage();
  }

  render(){
    return(
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <TouchableOpacity onPress={this.setLocale}>
          <Globus color={'red'} width={30} height={30} />
        </TouchableOpacity>
        <Text>{localeText.textNoInternet}</Text>
      </View>
    )
  }

Moymetod =()=>{

}

}

export default App;