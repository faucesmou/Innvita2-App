import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Text, View } from 'react-native'
import { AirplaneIcon } from './presentation/icons/icons';
import { HomeScreen } from './presentation/screens/home/HomeScreen';
import { Navigator } from './presentation/navigator/Navigator';


  export const ComponentsApp = () => {
    return (

    <NavigationContainer>

    <Navigator/>

    </NavigationContainer>    
  )

}
