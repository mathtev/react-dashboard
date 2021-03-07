export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';


const createPostSuccess = () => ({
  type: CREATE_POST_SUCCESS,
  isFetching: false,
});

const createPostFailure = () => ({
  type: CREATE_POST_FAILURE,
  isFetching: false,
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
      if (!posts){
        fetchPostFailure("Couldn't fetch any posts");
      }
      else {
        fetchPostSuccess(posts);
      }
    });
  }
};