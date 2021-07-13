import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainRoot from './apps/screens/MainRoot';
import 'react-native-gesture-handler';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './apps/redux/reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="MainRoot"
            component={MainRoot}
            options={{title: 'Main'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
