import { Button } from 'reactstrap';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { fetchPostById, updatePost } from '../../../actions/posts';
import Widget from '../../../components/Widget/Widget';

const Post = ({ fetchPostById, updatePost, post }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchPostById(id);
  }, [fetchPostById, id]);

  const data = {
    id: 46,
    title: 'new beginning',
    content: 'beginning of a fascinating story',
  }

  return (
    <div>
      {post && (
        <Widget>
          <div>{post.title}</div>
          <div>{post.content}</div>
          <Button onClick={() => updatePost(data)}>update</Button>
        </Widget>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.posts.isFetching,
  post: state.posts.post,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostById: (id) => {
    dispatch(fetchPostById(id));
  },
  updatePost: (data) => {
    dispatch(updatePost(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
