import React,{useEffect} from 'react';
import {View, Text,FlatList} from 'react-native';
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/postsActions'

import {styles} from './styles';
import Header from '../../components/posts-header';
import SearchInput from '../../components/search-input';
import PostItem from '../../components/post-item';
import FloatButtonTab from '../../components/floating-btn-tab';

const {
    container,title, titleText,floatingButtonWrapper, cardWrapper
} = styles;

const Posts = ({navigation, dispatch, loading, posts, hasErrors}) => {
    // const posts = [
    //     {
    //         "userId": 1,
    //         "id": 1,
    //         "title": "delectus aut autem Lorem epsumno",
    //         "completed": false
    //     },
    //     {
    //         "userId": 1,
    //         "id": 2,
    //         "title": "delectus aut autem Lorem epsumno",
    //         "completed": false
    //     },
    //     {
    //         "userId": 1,
    //         "id": 3,
    //         "title": "delectus aut autem Lorem epsumno",
    //         "completed": false
    //     },
    //     {
    //         "userId": 1,
    //         "id": 4,
    //         "title": "delectus aut autem Lorem epsumno",
    //         "completed": false
    //     }
    // ]
    useEffect(() => {
        dispatch(fetchPosts())
      }, [dispatch])
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
                <PostItem post={item} navigation={navigation}/>
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

const mapStateToProps = state => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
  })
  
  export default connect(mapStateToProps)(Posts)