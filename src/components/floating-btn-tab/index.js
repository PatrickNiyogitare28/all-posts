import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const FloatButtonTab = ({onTab}) => {
    const [activeTab, setActiveTab] = useState(1);
    const {
        container,latestTabBorder,
        tab, tabLabel
    } = styles;

    const handleOnTab = (id) => {
        setActiveTab(id);
        onTab(id);
    }
    return (
      <View style={container}>
          <View>
              <TouchableOpacity  style={tab} onPress={() => handleOnTab(1)}>
                  <Text style={tabLabel}>Latest</Text>
                  {
                  (activeTab === 1) ? 
                  <View style={latestTabBorder}></View> :
                  <></>
                  }
              </TouchableOpacity>
          </View>
          <View>
             <TouchableOpacity style={tab} onPress={() => handleOnTab(2)}>
              <Text style={tabLabel}>Featured</Text>
                 {
                  (activeTab === 2) ? 
                  <View style={latestTabBorder}></View> :
                  <></>
                  }
             </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={tab} onPress={() => handleOnTab(3)}>
             <Text style={tabLabel}>Premium</Text>
                  {
                  (activeTab === 3) ? 
                  <View style={latestTabBorder}></View> :
                  <></>
                  }
            </TouchableOpacity>
          </View>
      </View>
    )
}

export default FloatButtonTab;