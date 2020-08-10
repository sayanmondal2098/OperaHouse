import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FontAwesome5, Feather } from '@expo/vector-icons';

import Home from "./src/pages/Home";
import Contact from "./src/Contact";
import CustomDrawer from "./src/components/CustomDrawer";

const Application = createAppContainer(
  createDrawerNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: "My Home",
        drawerIcon: ({ clr }) => <Feather name="user" size={18} color={clr} />
      }
    },
    Statistic: {
      screen: Contact,
      navigationOptions: {
        title: "Account Statistic",
        drawerIcon: ({ clr }) => <Feather name="activity" size={18} color={clr} />
      }
    },
    Message: {
      screen: Contact,
      navigationOptions: {
        title: "Message Center",
        drawerIcon: ({ clr }) => <Feather name="message-square" size={18} color={clr} />
      }
    },
    Settings: {
      screen: Contact,
      navigationOptions: {
        title: "Settings",
        drawerIcon: ({ clr }) => <FontAwesome5 name="user-cog" size={18} color={clr} />
      }
    },
    Logout: {
      screen: Contact,
      navigationOptions: {
        title: "Log Out",
        drawerIcon: ({ clr }) => <Feather name="log-out" size={18} color={clr} />
      }
    }
  }, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawer
  })
)

export default Application;