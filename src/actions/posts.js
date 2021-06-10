import { getCurrentDate } from '../utils/date';

export const ADD_NEW_POST_SUCCESS = 'ADD_NEW_POST_SUCCESS';
export const ADD_NEW_POST_FAILURE = 'ADD_NEW_POST_FAILURE';
export const FETCH_POST_BY_ID_SUCCESS = 'FETCH_POST_BY_ID_SUCCESS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';

const addNewPostSuccess = (post) => ({
  type: ADD_NEW_POST_SUCCESS,
  isFetching: false,
  post,
});

const addNewPostFailure = (message) => ({
  type: ADD_NEW_POST_FAILURE,
  isFetching: false,
  message,
});

const fetchPostByIdSuccess = (post) => ({
  type: FETCH_POST_BY_ID_SUCCESS,
  isFetching: false,
  post,
});

const deletePostSuccess = (postId) => ({
  type: DELETE_POST_SUCCESS,
  isFetching: false,
  postId,
});

const deletePostFailure = (message) => ({
  type: DELETE_POST_FAILURE,
  isFetching: false,
  message,
});

const fetchPostRequest = () => ({
  type: FETCH_POST_REQUEST,
  isFetching: true,
});

const fetchPostSuccess = (posts) => ({
  type: FETCH_POST_SUCCESS,
  isFetching: false,
  posts,
});

const fetchPostFailure = (message) => ({
  type: FETCH_POST_FAILURE,
  isFetching: false,
  message,
});

const updatePostSuccess = (post) => ({
  type: UPDATE_POST_SUCCESS,
  isFetching: false,
  post,
});

const updatePostFailure = (message) => ({
  type: UPDATE_POST_FAILURE,
  isFetching: false,
  message,
});

export const fetchPosts = () => {
  const fetchConfig = {
    mode: 'cors',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: '{allPosts{id,title,content,updatedAt,createdAt}}',
    }),
  };
  return (dispatch) => {
    fetch('http://localhost:4000/graphql', fetchConfig)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return responseJson.data.allPosts;
      })
      .then((posts) => {
        if (!posts) {
          dispatch(fetchPostFailure("Couldn't fetch posts"));
          return Promise.reject(posts);
        } else {
          dispatch(fetchPostSuccess(posts));
          return Promise.resolve(posts);
        }
      });
  };
};

export const fetchPostById = (postId) => {
  const fetchConfig = {
    mode: 'cors',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{postById(id: ${postId}){id,title,content,updatedAt}}`,
    }),
  };
  return (dispatch) => {
    fetch('http://localhost:4000/graphql', fetchConfig)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        return responseJson.data.postById;
      })
      .then((post) => {
        if (!post) {
          dispatch(fetchPostFailure("Couldn't fetch posts"));
          return Promise.reject(post);
        } else {
          dispatch(fetchPostByIdSuccess(post));
          return Promise.resolve(post);
        }
      });
  };
};

export const addNewPost = (postData) => {
  const fetchConfig = {
    mode: 'cors',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation {
        addPost(title: "${postData.title}", content: "${
        postData.content
      }", createdAt: "${getCurrentDate()}") {
          id,
          title,
          content,
          updatedAt,
          createdAt
        }
      }`,
    }),
  };
  return (dispatch) => {
    fetch('http://localhost:4000/graphql', fetchConfig)
      .then((response) =>
        response.json().then((responseJson) => ({
          responseJson,
          response,
        }))
      )
      .then(({ responseJson, response }) => {
        const post = responseJson.data.addPost;
        console.log(post);
        if (response.ok) {
          dispatch(addNewPostSuccess(post));
          return Promise.resolve(post);
        } else {
          dispatch(
            addNewPostFailure(
              'Could not create a post, check addNewPost() action'
            )
          );
          return Promise.reject();
        }
      });
  };
};

export const deletePost = (id) => {
  const fetchConfig = {
    mode: 'cors',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation {
                deletePost(
                  id: ${id})  {
                    id
                  }
                }`,
    }),
  };
  return (dispatch) => {
    fetch('http://localhost:4000/graphql', fetchConfig).then((response) => {
      if (response.ok) {
        dispatch(deletePostSuccess(id));
        return Promise.resolve();
      } else {
        dispatch(
          deletePostFailure(
            'Could not delete a post, check deletePost() action'
          )
        );
        return Promise.reject();
      }
    });
  };
};

export const updatePost = (data) => {
  const fetchConfig = {
    mode: 'cors',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation {
                updatePost(id: ${data.id},title: "${data.title}",content: "${data.content}") {
                  id,
                  title,
                  content,
                  updatedAt,
                  createdAt
                }
              }`,
    }),
  };
  return (dispatch) => {
    fetch('http://localhost:4000/graphql', fetchConfig)
      .then((response) =>
        response.json().then((responseJson) => ({
          responseJson,
          response,
        }))
      )
      .then(({ response }) => {
        if (response.ok) {
          dispatch(updatePostSuccess(data));
          return Promise.resolve(data);
        } else {
          dispatch(
            updatePostFailure(
              'Could not update a post, check updatePost() action'
            )
          );
          return Promise.reject();
        }
      });
  };
};
