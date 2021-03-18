import {
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE
} from '../actions/posts';

const initialState = {
  isFetching: false
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        post: action.post
      });
    case ADD_NEW_POST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message
      });
    case FETCH_POST_REQUEST: 
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_POST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      });
    case FETCH_POST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message
      });
    default:
      return state;
  }
};

export default postsReducer;