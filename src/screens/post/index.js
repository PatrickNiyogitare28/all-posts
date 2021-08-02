import React, {useEffect} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/postActions';
import { fetchComments } from '../../actions/commentsActions';

import {styles} from './styles';

const Post = ({
    route,
    navigation,
    dispatch,
    post,
    comments,
    hasErrors,
    loading
}) => {
   const {
       container, imageWrapper,image,bookmark,subscription,
       title, text,blogWrapper,subscriptionWrapper
   } = styles;
   const {id} = route.params;
   const url = {uri: `https://picsum.photos/200/200?random=${id}`}
   useEffect(() => {
    dispatch(fetchComments(id))
    dispatch(fetchPost(id))
  }, [dispatch, route])
   return (
       <View style={container}>
          <ScrollView style={blogWrapper} showsVerticalScrollIndicator={false}>
          <View style={imageWrapper}>
              <Image source={url} style={image}/>
              <View style={bookmark}>
                <Icon name="bookmark" color="black" /> 
              </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('userProfile')}>
          <Text style={{color: 'grey', fontFamily:'poppins-regular', fontSize: 15}}>
              By <Text style={{fontWeight: 'bold'}}>Kelly Peter</Text>
          </Text>
          </TouchableOpacity>

          <View>
              <Text style={title}>
                  {post.title}
              </Text>
              <Text style={text}>
              {post.body}
              </Text>
          </View>
          </ScrollView>

          <View style={subscriptionWrapper}>
              <View style={subscription}>
                  <Image source={require('../../../assets/icons/flash.png')} 
                  style={{width: 30, height: 30}}/>
                  <Text style={{fontFamily:'poppins-regular', fontSize:13,color: '#707070'}}>
                      Read complete story, <Text style={{color: '#3AAAB1',fontWeight:'bold'}}>Buy premium plan $20/yr</Text>
                  </Text>
                  <Image source={require('../../../assets/icons/close.png')} 
                   style={{width: 10, height: 10}}
                  />
              </View>
          </View>
       </View>
   )
}

const mapStateToProps = state => ({
    post: state.post.post,
    comments: state.comments.comments,
    loading: { post: state.post.loading, comments: state.comments.loading },
    hasErrors: { post: state.post.hasErrors, comments: state.comments.hasErrors },
  })
  
  export default connect(mapStateToProps)(Post)