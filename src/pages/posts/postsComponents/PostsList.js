import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { deletePost, fetchPosts } from '../../../actions/posts';
import Widget from '../../../components/Widget/Widget';

const PostsList = ({ isFetching, posts, fetchPosts, deletePost }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <NavLink to={'/app/posts/new'} exact>
        + New Post
      </NavLink>
      <hr />
      <Widget>
        <h4 className="mb-3">Posts</h4>
        <Table className={'table-striped'}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>content</th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>
                    {' '}
                    <Link to={{ pathname: `/app/posts/${post.id}` }}>
                      view
                      <br /> details
                    </Link>
                    <Button onClick={() => deletePost(post.id)}>delete post</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Widget>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.posts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => {
    dispatch(fetchPosts());
  },
  deletePost: (postId) => {
    dispatch(deletePost(postId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
