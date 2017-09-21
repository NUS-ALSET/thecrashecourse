import React from 'react';
import {View} from 'react-native';
import Expo from 'expo';
import Router from './Router';

export default class App extends React.Component {
    state = {
      loading: true,
    }
    async componentDidMount() {
      await Expo.Font.loadAsync({
        'oswald-bold': require('./assets/fonts/Oswald-Bold.ttf'),
        'oswald-medium': require('./assets/fonts/Oswald-Medium.ttf'),
        'oswald-regular': require('./assets/fonts/Oswald-Regular.ttf'),
        'oswald-light': require('./assets/fonts/Oswald-Light.ttf'),
      });
      this.setState({loading: false});
    }
    render() {
        if (this.state.loading) return null;
        return (
          <Router />
        );
    }
  }