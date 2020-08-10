import React from 'react';
import { DrawerNavigatorItems } from 'react-navigation-drawer';



import SideBar from '../components/SideBar';
import HomeScreen from '../Screen/HomeScreen';
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from 'react-native';

function CustomDrawer ({...props}){
  return(
    <View>
      <Text>DDDDDDD</Text>
      <DrawerNavigatorItems {...props}/>
    </View>
  )
}

export default CustomDrawer;