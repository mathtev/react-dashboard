import {
  FETCH_CHARTS_DATA_REQUEST,
  FETCH_CHARTS_DATA_SUCCESS,
  FETCH_CHARTS_DATA_FAILURE
} from '../actions/charts';

const initialState = {
  isFetching: false
};

const chartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARTS_DATA_REQUEST: 
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_CHARTS_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        chartsData: action.chartsData
      });
    case FETCH_CHARTS_DATA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message
      });
    default:
      return state;
  }
};

export default chartsReducer;