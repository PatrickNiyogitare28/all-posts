import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Onboard from '../screens/onboard';
import Login from '../screens/login';
import Posts from '../screens/posts';
import Post from '../screens/post';


enableScreens();
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="onboard" component={Onboard} options={{headerShown: false}} />
      <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="posts" component={Posts} options={{headerShown: false}} />
      <Stack.Screen name="post" component={Post}  />
    </Stack.Navigator>
  );
}

export default MyStack;