import React from 'react';
import {Dimensions} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Expo from 'expo';
import HomeScreen from './Home';
import DrawerScreen from './Drawer';

const {height,width} = Dimensions.get('window');
const MainNavigator = DrawerNavigator({
    Home: {screen: HomeScreen},
}, {
  drawerWidth: width*0.8,
  drawerPosition: 'left',
  contentComponent: (props) => <DrawerScreen {...props} />
});

export default StackNavigator({
    Main: {screen: MainNavigator},
},{headerMode: 'none'});



