import { Alert, Button, Form, FormGroup, Input } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { fetchPostById, updatePost } from '../../../actions/posts';
import Widget from '../../../components/Widget/Widget';

const Post = ({ fetchPostById, updatePost, post, errorMessage }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchPostById(id);
  }, [fetchPostById, id]);

  const data = {
    id: 46,
    title: 'new beginning',
    content: 'beginning of a fascinating story',
  };

  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    if(post){
      setNewTitle(post.title);
      setNewContent(post.content);
    }
  }, [post])

  const changeTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const changeContent = (event) => {
    setNewContent(event.target.value);
  };

  const doUpdate = (e) => {
    updatePost({
      id: post.id,
      title: newTitle,
      content: newContent,
    });
    e.preventDefault();
  };

  return (
    <div>
      {post && (
        <Widget>
          <Form className="mt" onSubmit={doUpdate}>
            {errorMessage && (
              <Alert size="sm" color="danger">
                {errorMessage}
              </Alert>
            )}
            <FormGroup className="form-group">
              <Input
                className="no-border"
                value={newTitle}
                onChange={changeTitle}
                type="text"
                required
                name="title"
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="no-border"
                value={newContent}
                onChange={changeContent}
                type="textarea"
                required
                name="content"
              />
            </FormGroup>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Button color="success" size="sm" type="submit">
                  Update
                </Button>
              </div>
            </div>
          </Form>
        </Widget>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.posts.isFetching,
  post: state.posts.post,
  errorMessage: state.posts.message
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
