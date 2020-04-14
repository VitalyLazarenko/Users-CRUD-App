import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CreateEditPage from './CreateEditPage';
import UserList from './UserList';
import Welcome from './Welcome';
// import store from '../store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="User List" component={UserList} />
          <Stack.Screen name="Create Page" component={CreateEditPage} />
          <Stack.Screen name="Edit Page" component={CreateEditPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
