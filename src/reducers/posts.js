import { TYPE_TEST } from '../actions/posts';

const initialState = { isFetching: false };

const postsReducer = (state = initialState, action) => {
  console.log("this message wont show;")
  switch (action.type) {
    case TYPE_TEST:
      return Object.assign({}, state, { 
        isFetching: true,
      });
    default:
      return state;
  }
};

export default postsReducer;