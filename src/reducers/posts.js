import {
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE
} from '../actions/posts';

const initialState = {
  isFetching: false
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case CREATE_POST_FAILURE:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case CREATE_POST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
      });
    case CREATE_POST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case CREATE_POST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    default:
      return state;
  }
};

export default postsReducer;