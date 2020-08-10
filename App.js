import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home  from "./src/pages/Home";
import Contact  from "./src/Contact";
import CustomDrawer from "./src/components/CustomDrawer";

const Application = createAppContainer(
  createDrawerNavigator({
    Home,
    Contact
  },{
    initialRouteName: 'Home',
    contentComponent: CustomDrawer
  })
)

export default Application;