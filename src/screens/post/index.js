import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './styles';

const Post = ({navigation}) => {
   const {
       container, imageWrapper,image,bookmark,subscription,
       title, text,blogWrapper,subscriptionWrapper
   } = styles;
   return (
       <View style={container}>
          <ScrollView style={blogWrapper} showsVerticalScrollIndicator={false}>
          <View style={imageWrapper}>
              <Image source={require("../../../assets/images/post-image.jpg")} style={image}/>
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
                   How to become a master in colour pallete ?
              </Text>
              <Text style={text}>
              cover: Scale the image uniformly (maintain the image's aspect ratio)
              so that both dimensions (width and height) of the image will be equal
              to or larger than the corresponding dimension of the view (minus padding).

              contain: Scale the image uniformly (maintain the image's aspect ratio) so that both
              dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).

              stretch: Scale width and height independently, This may change the aspect
               ratio of the src.

               
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

export default Post;