import {
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_FAILURE,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  FETCH_POST_BY_ID_SUCCESS,
} from '../actions/posts';

const initialState = {
  isFetching: false,
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: [...state.posts, action.post],
      });
    case ADD_NEW_POST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message,
      });
    case DELETE_POST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: state.posts.filter((post) => post.id !== action.postId),
      });
    case DELETE_POST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message,
      });
    case FETCH_POST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_POST_BY_ID_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        post: action.post,
      });
    case FETCH_POST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts,
      });
    case FETCH_POST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message,
      });
    case UPDATE_POST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: state.posts.map((post) =>
          post.id === action.post.id ? action.post : post
        ),
      });
    case UPDATE_POST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message,
      });
    default:
      return state;
  }
};

export default postsReducer;
