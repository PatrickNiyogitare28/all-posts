import React,{useEffect, useState} from 'react';
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
    const  [filteredPosts, setFilteredPosts] = useState([]);
    useEffect(() => {
        dispatch(fetchPosts())
        setFilteredPosts(posts);
      }, [dispatch])
   
      const handleSearch = (value) => {
      let tokens = value
        .toLowerCase()
        .split(' ')
        .filter(function (token) {
          return token.trim() !== '';
        });
      if (tokens.length) {
        let searchTermRegex = new RegExp(tokens.join('|'), 'gim');
        let filteredList = posts.filter(function (post) {
          let postString = '';
              postString += post['title'].toString().substring(0,20).toLowerCase().trim() + ' ';
          return postString.match(searchTermRegex);
        });
        setFilteredPosts(filteredList);
      }
      }
    return (
        <View style={container}>
          <View style={cardWrapper}>

          <Header navigation={navigation} />
          <View style={title}>
              <Text style={titleText}>Blogs</Text>
          </View>
          <SearchInput handleSearch = {handleSearch}/>

          <View style={{height: '75%'}}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredPosts}
            keyExtractor={(post) => post.id.toString()}
            renderItem={({ item }) => (
                <PostItem post={item} navigation={navigation} excerpt />
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