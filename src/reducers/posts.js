import { TYPE_TEST } from '../actions/posts';

const initialState = { isfetching: false };

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_TEST:
      return action.message;
      default:
        return state;
  }
}

export default postsReducer;