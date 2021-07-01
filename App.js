
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  MainRoot from './apps/pages/MainRoot'
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown :false}}>
        <Stack.Screen
          name="MainRoot"
          component={MainRoot}
          options={{ title: 'Main' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
