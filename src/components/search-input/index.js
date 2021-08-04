import React, { useEffect, useState } from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './styles';

const {container,inputWrapper, mic,micWrapper, input} = styles;


const SearchInput = ({handleSearch}) => {
    const [search, setValue] = useState("");
    useEffect(() => {
       handleSearch(search)
    }, [search])
    return (
        <View style={container}>
            <View style={inputWrapper}>
               <Icon name="search" color="black" iconStyle={{fontSize: 30, fontWeight:'1000'}}/>
               <TextInput 
                placeholder="Search Blogs" 
                style={input}
                onChangeText={(text) => setValue(text)} 
                value={search}
                />
            </View>
            <View style={micWrapper}>
                 <Image source={require("../../../assets/icons/mic-icon.png")} style={mic}  />
            </View>
        </View>
    )
}

export default SearchInput;