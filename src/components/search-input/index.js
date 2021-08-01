import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './styles';

const {container,inputWrapper, mic,micWrapper, input} = styles;

const SearchInput = () => {
    return (
        <View style={container}>
            <View style={inputWrapper}>
               <Icon name="search" color="black" iconStyle={{fontSize: 30, fontWeight:'1000'}}/>
               <TextInput placeholder="Search Blogs" style={input} />
            </View>
            <View style={micWrapper}>
                 <Image source={require("../../../assets/icons/mic-icon.png")} style={mic}  />
            </View>
        </View>
    )
}

export default SearchInput;