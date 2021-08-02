import React from 'react';
import {View,Image,TouchableOpacity} from 'react-native';
import {styles} from './styles'; 
import Avatar from '../../../assets/images/avatar.jpg';
import Posts from '../../screens/posts';

const {container, avatar} = styles;
const PostsHeader = ({navigation}) => {
    return(
        <View style={container}>
               <Image source={require('../../../assets/icons/menu-icon.png')} />

               <TouchableOpacity onPress={() => navigation.navigate('userProfile')}>
               <Image source={require('../../../assets/images/avatar.jpg')} style={avatar} />
               </TouchableOpacity>

        </View>
    )
}

export default PostsHeader;