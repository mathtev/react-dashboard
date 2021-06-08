import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Table } from 'reactstrap';
import { fetchPosts } from '../../../actions/posts';
import Widget from '../../../components/Widget/Widget';

const PostsList = ({ isFetching, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

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
  //addNewPost: (postData) => { dispatch(addNewPost(postData)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
