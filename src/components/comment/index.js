import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const Comment = ({comment,navigation}) => {
 const {container, avatar, name, body} = styles;
 const url = {uri: `https://eu.ui-avatars.com/api/?name=${comment.email}`}
  return (
      <TouchableOpacity onPress={() => navigation.navigate('userProfile')}>
      <View style={container}>
          <View>
             <Image  source={url} style={avatar}/>
          </View>
          <View style={{marginLeft: 10}}>
              <Text style={name}>{comment.email}</Text>
              <Text style={body}>{comment.body}</Text>
          </View>
      </View>
      </TouchableOpacity>
  )
}

export default Comment;