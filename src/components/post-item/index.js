import React from 'react';
import {View, Text,Image} from 'react-native';
import {styles} from './styles';

const PostItem = ({post}) => {
    const {container,imageWrapper, descriptionWrapper, image} = styles;
    return (
        <View style={container}>
            <View style={imageWrapper}>
                <Image style={image} source={require("../../../assets/images/post-image.jpg")} />
            </View>
            <View style={descriptionWrapper}>
                <View>
                <Text style={{
                    color: '#C7C7C7',
                    fontSize: 15,
                    fontWeight: 'bold',
                    fontFamily: 'poppins-regular'
                }}>05 min Read</Text>

                <Text style={{
                    fontSize: 20,
                    fontFamily: 'poppins-bold',
                    color:'#636363'
                }}>
                    {post.title}
                </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{fontFamily: 'poppins-regular'}}>32.4K</Text>
                        <Image source={require("../../../assets/icons/hands.png")}
                            style={{ width: 20, height: 20, marginLeft: 10 }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginRight: 10,fontFamily: 'poppins-regular' }}>12K</Text>
                        <Image source={require("../../../assets/icons/comment.png")}
                            style={{ width: 20, height: 20 }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PostItem;