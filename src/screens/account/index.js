import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles'

const Account = () => {
    const {
        container, image, name, highlight,profileWrapper,
        sectionImage, section, sectionLabel,itemsContainer,
        item,itemLabel,itemImage,notification,notificationLabel
    } = styles;
    return (
        <View style={container}>
         <View style={profileWrapper}>
            <Image source={require("../../../assets/images/avatar.jpg")} style={image} />
            <Text style={name}>Welcome Rukima Mayers</Text>
            <Text style={highlight}>Manage your profile Info, privacy, security and app setting</Text>

            <View style={section}>
                <Image source={require('../../../assets/icons/profile.png')} style={sectionImage}/>
                <Text style={sectionLabel}>Account</Text>
            </View>
         </View>
         <View style={itemsContainer}>
             <View style={item}>
                 <Text style={itemLabel}>Personal info</Text>
                 <Image source={require("../../../assets/icons/forward-arrow.png")} style={itemImage}/>
             </View>
             <View style={item}>
                 <Text style={itemLabel}>Password & Security</Text>
                 <Image source={require("../../../assets/icons/forward-arrow.png")} style={itemImage} />
             </View>
             <View style={item}>
                 <Text style={itemLabel}>App Theme</Text>
                 <Image source={require("../../../assets/icons/forward-arrow.png")} style={itemImage}    />
             </View>
             <View style={section}>
                <Image source={require('../../../assets/icons/notification.png')} style={sectionImage}/>
                <Text style={sectionLabel}>notification</Text>
            </View>
         </View>
         <View style={notification}>
             <Text style={notificationLabel}>Notifications</Text>
             <Image source={require('../../../assets/icons/toggle-switch.png')}
              style={{
                  width: 50,
                  height: 20
              }}
             />
         </View>
         
        </View>
    )
}

export default Account;