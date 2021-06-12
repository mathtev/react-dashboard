import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Button, Input, Table } from 'reactstrap';
import { deletePost, fetchPosts } from '../../../../actions/posts';
import Widget from '../../../../components/Widget/Widget';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import styled from './PostsList.module.scss';

const PostsList = ({ isFetching, posts, fetchPosts, deletePost }) => {
  const [filteredPosts, setFilteredPosts] = useState(null);
  const [filterString, setFilterString] = useState('');

  const changeFilterString = (event) => {
    setFilterString(event.target.value);
  };

  const filterPosts = useCallback(
    (posts) => {
      return posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(filterString) ||
          post.content.toLowerCase().includes(filterString)
        );
      });
    },
    [filterString]
  );

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    const result = filterPosts(posts);
    setFilteredPosts(result);
  }, [posts, filterString, filterPosts]);

  return (
    <div>
      <NavLink to={'/app/posts/new'} exact>
        + New Post
      </NavLink>
      <hr />
      <Widget>
        <h4 className="mb-3">Posts</h4>
        <Input
          className="my-2 no-border"
          value={filterString}
          onChange={changeFilterString}
          type="text"
          name="search"
          placeholder="Search"
        />
        <Table className={'table-striped'}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>content</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts &&
              filteredPosts.map((post) => (
                <tr className={styled.tableRow} key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>
                    <Button color="link">
                      <Link to={{ pathname: `/app/posts/${post.id}` }}>
                        <AiFillEdit />
                      </Link>
                    </Button>
                    <Button color="link" onClick={() => deletePost(post.id)}>
                      <AiFillDelete />
                    </Button>
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
