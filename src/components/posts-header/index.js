import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles'; 
import Avatar from '../../../assets/images/avatar.jpg';
import Posts from '../../screens/posts';

const {container, avatar} = styles;
const PostsHeader = () => {
    return(
        <View style={container}>
               <Image source={require('../../../assets/icons/menu-icon.png')} />
               <Image source={require('../../../assets/images/avatar.jpg')} style={avatar} />

        </View>
    )
}

export default PostsHeader;