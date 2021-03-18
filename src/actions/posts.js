export const ADD_NEW_POST_SUCCESS = 'ADD_NEW_POST_SUCCESS';
export const ADD_NEW_POST_FAILURE = 'ADD_NEW_POST_FAILURE';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';


const addNewPostSuccess = (post) => ({
  type: ADD_NEW_POST_SUCCESS,
  isFetching: false,
  post
});

const addNewPostFailure = (message) => ({
  type: ADD_NEW_POST_FAILURE,
  isFetching: false,
  message
});

const fetchPostRequest = () => ({
  type: FETCH_POST_REQUEST,
  isFetching: false,
});

const fetchPostSuccess = (posts) => ({
  type: FETCH_POST_SUCCESS,
  isFetching: false,
  posts
});

const fetchPostFailure = (message) => ({
  type: FETCH_POST_FAILURE,
  isFetching: false,
  message
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
      query: '{posts{id,title}}',
    }),
  }
  return dispatch => {
    fetch('http://localhost:4000/graphql', fetchConfig).then(response => {
      return response.json();
    }).then(responseJson => {
      return responseJson.data.posts;
    }).then(posts => {
      if (!posts) {
        dispatch(fetchPostFailure("Couldn't fetch posts"));
      } else {
        dispatch(fetchPostSuccess(posts));
      }
    });
  }
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
        addPost(title: "${postData.title}", content: "${postData.content}") {
          id,
          title,
          content
        }
      }`,
    }),
  }
  return dispatch => {
    fetch('http://localhost:4000/graphql', fetchConfig)
      .then(response => response.json().then(responseJson => ({ responseJson, response })))
      .then(({ responseJson, response }) => {
        const post = responseJson.data.addPost;
        if (response.ok) {
          dispatch(addNewPostSuccess(post));
        } else {
          dispatch(addNewPostFailure('Could not create a post, check addNewPost() action'));
        }
        return responseJson.data.addPost;
      });
  }
};