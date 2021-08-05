import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainRoot from './apps/screens/MainRoot';
import MovieDetail from './apps/screens/MovieDetail';

import 'react-native-gesture-handler';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './apps/redux/reducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
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
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{title: 'MovieDetail'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
