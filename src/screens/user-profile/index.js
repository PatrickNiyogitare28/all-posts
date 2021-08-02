import React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import AuthButton from '../../components/auth-button';
import {styles, registerBtnStyles, loginBtnStyles} from './styles';


const Profile = ({navigation}) => {
    const {
        container, image, header,profileImageContainer, avatar,
        title, email, bio, status, followers, following,posts,label,
        labelType,btnWrapper,navigationTab,navItem
    } = styles;
    return (
       <View style={container}>
           <ImageBackground source={require("../../../assets/images/profile-bg.png")} style={image}>
             <View style={{flex: 1, height:'100%', justifyContent:'space-between'}}>
              <View style={{height: '90%'}}>
              <View style={header}>
                <TouchableOpacity  onPress={() => navigation.goBack()}>
                <Image 
                 source={require("../../../assets/icons/back-arrow.png")} 
                 style={{width:40, height:40}}
                 />
                 </TouchableOpacity>
                <Image source={require("../../../assets/icons/white-menu.png")} style={{width:40, height:40}}/>
              </View>
              <View style={profileImageContainer}>
                <Image source={require("../../../assets/images/avatar.jpg")} style={avatar} />
                <Text style={title}>John Doe</Text>
                <Text style={email}>john@gmail.com</Text>
                <Text style={bio}>
                     A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the 
                </Text>
              </View>
              <View style={status}>
                  <View style={posts}>
                      <Text style={label}>103</Text>
                      <Text style={labelType}>Posts</Text>
                  </View>
                  <View style={followers}>
                      <Text style={label}>2M</Text>
                      <Text style={labelType}>Followers</Text>
                  </View>
                  <View style={following}>
                      <Text style={label}>23K</Text>
                      <Text style={labelType}>Following</Text>
                  </View>
              </View>
              <View style={btnWrapper}>
                <AuthButton navigation={false} styles={registerBtnStyles} label={"Follow"}/>
                <AuthButton navigation={false} styles={loginBtnStyles} label={"Message"} 
               />
               </View>
               </View>

               <View style={navigationTab}>
                   <Image source={require("../../../assets/icons/explore.png")} style={navItem} />
                   <Image source={require("../../../assets/icons/notification.png")} style={navItem}/>
                   <Image source={require("../../../assets/icons/search.png")} style={navItem}/>
                   <Image source={require("../../../assets/icons/profile.png")} style={navItem}/>
               </View>
               </View>
           </ImageBackground>
       </View>
    )
}

export default Profile;