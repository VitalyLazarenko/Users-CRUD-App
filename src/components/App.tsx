import 'react-native-gesture-handler';
import React from 'react';
// import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
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
        {/*<Provider store={store}>*/}
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="CreateEditPage" component={CreateEditPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
