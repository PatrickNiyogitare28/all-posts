import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const AuthButton = ({styles, label, navigation}) => {
   const {btnContainer,btnLabel} = styles;
   return (
       <View style={btnContainer}>
           <TouchableOpacity style={{textAlign:'center'}} onPress={() => { 
               (navigation) ?
                navigation.navigate("login") :
                null
            }
           }
               >
               <Text style={btnLabel}>{label}</Text>
           </TouchableOpacity>
       </View>
   )
}

export default AuthButton;