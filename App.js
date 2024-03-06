import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Register from './screens/Register';
import Deposit from './screens/Deposit';
import Balance from './screens/Balance';
import ChangePin from './screens/ChangePin';
import StopCheque from './screens/cheque';
import Verify from './screens/ChangePin'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Deposit" component={Deposit} />
        <Stack.Screen name="Balance" component={Balance} />
        <Stack.Screen name="Change-pin" component={ChangePin} />
        <Stack.Screen name="Cheque" component={StopCheque} />
        <Stack.Screen name="Verify" component={Verify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
