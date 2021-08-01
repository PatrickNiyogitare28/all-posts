import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Onboard from '../screens/onboard';
import Login from '../screens/login';


enableScreens();
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="onboard" component={Onboard} options={{headerShown: false}} />
      <Stack.Screen name="login" component={Login} options={{headerShown: false}} />

    </Stack.Navigator>
  );
}

export default MyStack;