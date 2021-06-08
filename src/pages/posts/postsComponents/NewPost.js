import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert, Button, Form, FormGroup, Input } from 'reactstrap';
import { addNewPost } from '../../../actions/posts';
import Widget from '../../../components/Widget/Widget';

const NewPost = ({ errorMessage, isFetching, addNewPost }) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  const doAddNewPost = (e) => {
    e.preventDefault();
    addNewPost({
      title,
      content,
    });
  };

  return (
    <div>
      <Widget>
        <h4 className="mt-0">Add new post</h4>
        <Form className="mt" onSubmit={doAddNewPost}>
          {errorMessage && (
            <Alert size="sm" color="danger">
              {errorMessage}
            </Alert>
          )}
          <FormGroup className="form-group">
            <Input
              className="no-border"
              value={title}
              onChange={changeTitle}
              type="text"
              required
              name="title"
              placeholder="Post title"
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="no-border"
              value={content}
              onChange={changeContent}
              type="text"
              required
              name="content"
              placeholder="Post content"
            />
          </FormGroup>

          <div className="d-flex justify-content-between align-items-center">
            {/* eslint-disable-line */}
            <div>
              <Button color="success" size="sm" type="submit">
                {isFetching ? 'Loading...' : 'Add Post'}
              </Button>
            </div>
          </div>
        </Form>
      </Widget>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.posts.isFetching,
  errorMessage: state.posts.message,
});

const mapDispatchToProps = (dispatch) => ({
  addNewPost: (postData) => {
    dispatch(addNewPost(postData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
