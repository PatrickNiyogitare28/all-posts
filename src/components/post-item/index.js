import React from 'react';
import {View, Text,Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const PostItem = ({post, navigation}) => {
    const {container,imageWrapper, descriptionWrapper, image,date,dateText} = styles;
    const {title} = post;
    const url = {uri: `https://picsum.photos/200/200?random=${post.id}`}
    const handleOnNavigate = () => {
        navigation.navigate('post',{id: post.id, userId: post.userId, navigation})
    }
    return (
        <TouchableOpacity style={container} onPress={() => handleOnNavigate()}>
            <View style={imageWrapper}>
                <Image style={image} source={url} />
                <View style={date}>
                    <Text style={dateText}>3 Feb</Text>
                </View>
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
                    {/* {post.title.substring(1,40)} */}
                    {
                        (title.length > 40) ? title.substring(1,40)+" ..." : title
                    }
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
        </TouchableOpacity>
    )
}

export default PostItem;