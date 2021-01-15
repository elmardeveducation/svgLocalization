import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Globus from './assests/svg/Globus';
import localeText from './localization';
import NetInfo from "@react-native-community/netinfo";
import {useEffect} from 'react'

export default  App = ()=> {
  const myhandler=(state) => {
    //const {isConnected, details} = state;
    console.log ('strength', state.details.strength)
  //  dispatch(setStatusConnection(isConnected));
    // dispatch(setStrengthConnection(details.strength));
   
  }
  useEffect(() => {
    const netConnection = NetInfo.addEventListener('connectionChange', myhandler);
    
    return () => {
    netConnection();
    };
    }, [])
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
    }  

    
  

