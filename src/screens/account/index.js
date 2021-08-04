import React, { useState } from 'react';
import {View, Text, Image, Switch} from 'react-native';

import {styles} from './styles'

const Account = () => {
    const [isEnabled, setIsEnable] = useState(false);
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
             <Switch
                        trackColor={{ false: "#AFAFAF7A", true: "#08B1BD" }}
                        thumbColor={isEnabled ? "#fff" : "#F4F3F4"}
                        ios_backgroundColor="#AFAFAF7A"
                        onValueChange={() => setIsEnable(!isEnabled)}
                        value={isEnabled}
                    />
         </View>
         
        </View>
    )
}

export default Account;