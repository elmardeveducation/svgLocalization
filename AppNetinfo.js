import React, {Component, PureComponent} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import Globus from './assests/svg/Globus';
import localeText from './localization';
import netInfo from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  unsubscribe = () => {
    netInfo.addEventListener((state) => {
      /* setNetInfo(
      `Connection type: ${state.type}
      Is connected?: ${state.isConnected}
      IP Address: ${state.details.ipAddress},
      Signal strength: ${state.details.strength}`,
    ); */
      console.log(JSON.stringify(state.details.strength));
    });
    this.setState();
  };

  componentDidUpdate(state) {
    //this.unsubscribe();
    this.setState({});
    console.log(JSON.stringify(state.details.strength));
  }
  componentWillUnmount() {
    //this.unsubscribe();
  }
  componentDidMount() {
    this.unsubscribe();
  }
  getNetInfo = () => {
    // To get the network state once
    netInfo.fetch().then((state) => {
      console.log(
        `Connection type: ${state.type}
          Is connected?: ${state.isConnected}
          IP Address: ${state.details.ipAddress},
          Signal strength: ${state.details.strength}`,
      );
    });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.header}>
            React Native NetInfo
            {'\n'}
            To Get NetInfo information
          </Text>
          <Text style={styles.textStyle}>
            {/*Here is NetInfo to get device type*/}
            {/*         {netInfo}
             */}{' '}
          </Text>
          <TouchableOpacity
            style={{width: '30%', height: '10%', backgroundColor: 'green'}}
            title="Get more detailed NetInfo"
            onPress={() => this.getNetInfo()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 20,
  },
});
