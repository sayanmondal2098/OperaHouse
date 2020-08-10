import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Slider } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';


export default class SideBar extends React.Component {

    // we won't need to configure navigationOptions just yet
    static navigationOptions = {
  
    };
  
    render() {
      return (
        <View>
          <Text>One</Text>
        </View>
      );
    }
  }