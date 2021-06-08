import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostById } from '../../../actions/posts';
import Widget from '../../../components/Widget/Widget';

const Post = ({ fetchPostById, posts }) => {
  useEffect(() => {
    fetchPostById(2);
  }, [fetchPostById]);

  const post = posts;
  
  return (
    <div>
      <Widget>
        {posts && <div>{post.title}</div>}
      </Widget>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.posts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostById: (id) => {
    dispatch(fetchPostById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
