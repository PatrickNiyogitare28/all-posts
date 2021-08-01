import React from 'react';
import {View, Text,FlatList} from 'react-native';
import {styles} from './styles';
import Header from '../../components/posts-header';
import SearchInput from '../../components/search-input';
import PostItem from '../../components/post-item';
import FloatButtonTab from '../../components/floating-btn-tab';

const {
    container,title, titleText,floatingButtonWrapper, cardWrapper
} = styles;

const Posts = () => {
    const posts = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem Lorem epsumno",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "delectus aut autem Lorem epsumno",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "delectus aut autem Lorem epsumno",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "delectus aut autem Lorem epsumno",
            "completed": false
        }
    ]
    return (
        <View style={container}>
          <View style={cardWrapper}>

          <Header />
          <View style={title}>
              <Text style={titleText}>Blogs</Text>
          </View>
          <SearchInput />

          <View style={{height: '75%'}}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={posts}
            keyExtractor={(post) => post.id.toString()}
            renderItem={({ item }) => (
                <PostItem post={item} />
                )}
                />
          </View>
        </View>
        <View style={floatingButtonWrapper}>
           <FloatButtonTab />
        </View>
        </View>
    )
}

export default Posts;