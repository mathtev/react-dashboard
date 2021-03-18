import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { addNewPost, fetchPosts } from '../../actions/posts';

const Notifications = (props) => {

  const { fetchPosts, addNewPost } = props;
  const postData = { 
    title: 'if this works i will be happy', 
    content: 'it will be really awesome if it works' 
  }

  useEffect(() => {
    fetchPosts();
    addNewPost(postData);
  }, [fetchPosts, addNewPost]);

  return (
    <div>
      {console.log(props)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.posts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => { dispatch(fetchPosts()) },
  addNewPost: (postData) => { dispatch(addNewPost(postData)) },
});


export default connect(mapStateToProps, mapDispatchToProps)(Notifications);