import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Onboard from '../screens/onboard';
import Login from '../screens/login';
import Posts from '../screens/posts';
import Post from '../screens/post';
import UserProfile from '../screens/user-profile';
import Account from '../screens/account';


enableScreens();
const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="onboard" component={Onboard} options={{headerShown: false}} />
      <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="posts" component={Posts} options={{headerShown: false}} />
      <Stack.Screen 
       name="post"
       component={Post}
       options={{
         headerHideShadow:true,
         title:'',
         headerStyle: {
          elevation: 0,
         },
         headerTitleStyle: {
          fontWeight: 'normal',

        },
        headerTintColor: 'black',
         }}/>
      <Stack.Screen name="userProfile" component={UserProfile} options={{headerShown: false}} />
      <Stack.Screen 
         name="account"
         component={Account}
         options={{
           title:'Account',
           headerStyle: {
            elevation: 0,
           },
           headerTitleStyle: {
            fontWeight: 'normal',
  
          },
          headerTitleAlign: 'center',
          headerHideShadow: true,
          headerBackTitleVisible: true,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: '#BFBFBF'
          }
         }}/>
    </Stack.Navigator>
  );
}


export default AppStack;