import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SideBar from '../components/SideBar';
import HomeScreen from '../Screen/HomeScreen';
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from 'react-native';
import { CustomDrawer } from "./CustomDrawer";

const DrawerNavigator = createDrawerNavigator({
  
  SideBar : {
    screen: SideBar,
    navigationOptions: {
      title: "Side Bar",
      drawerIcon:  <FontAwesome5 name="cogs" size={12}/>
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home Bar",
      drawerIcon: <FontAwesome5 name="user" size={12}/>
    }
  }
},{
  initialRouteName: 'HomeScreen',
  contentComponent: CustomDrawer
});

export default DrawerNavigator;