import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const FloatButtonTab = () => {
    const {
        container,latestTabBorder,
        latestTab, tabLabel, latestTabLabel
    } = styles;
    return (
      <View style={container}>
          <View style={latestTab}>
              <Text style={latestTabLabel}>Latest</Text>
              <View style={latestTabBorder}></View>
          </View>
          <View>
              <Text style={tabLabel}>Featured</Text>
          </View>
          <View>
              <Text style={tabLabel}>Premium</Text>
          </View>
      </View>
    )
}

export default FloatButtonTab;