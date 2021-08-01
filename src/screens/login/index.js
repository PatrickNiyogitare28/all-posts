import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput,Pressable } from 'react-native';
import {styles} from './styles';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
           <View style={styles.banner}>
               <Image source={
                   require("../../../assets/logos/logo.png")
               }
               style={styles.image}
               />
           </View>
           <View style={styles.highlight}>
               <View>
                   <Text style={styles.headerText}>Welcome to Read Posts</Text>
               </View>
               <View style={styles.highlightTextContainer}>
                   <Text style={styles.highlightText}>We deliver the freshest fruit salad combo. </Text>
                   <Text style={styles.highlightText}>Order from combo today</Text>
               </View>
           </View>
           <View style={styles.formContainer}>
               <TextInput style={styles.input} placeholder="email"/>
               <TextInput style={styles.input} secureTextEntry={true}  placeholder="password"/>

           </View>
           <View>
           <Pressable style={styles.button} 
            onPress = {() => navigation.navigate("posts")} >
               <Text style={styles.buttonText}
               >Log in</Text>
           </Pressable>
           </View>
        </View>
    );
}

export default Login;