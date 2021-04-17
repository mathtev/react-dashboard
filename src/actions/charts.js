export const FETCH_CHARTS_DATA_SUCCESS = 'FETCH_CHARTS_DATA_SUCCESS';
export const FETCH_CHARTS_DATA_FAILURE = 'FETCH_CHARTS_DATA_FAILURE';
export const FETCH_CHARTS_DATA_REQUEST = 'FETCH_CHARTS_DATA_REQUEST';


const fetchChartsDataRequest = () => ({
  type: FETCH_CHARTS_DATA_REQUEST,
  isFetching: false,
});

const fetchChartsDataSuccess = (chartsData) => ({
  type: FETCH_CHARTS_DATA_SUCCESS,
  isFetching: false,
  chartsData
});

const fetchChartsDataFailure = (message) => ({
  type: FETCH_CHARTS_DATA_FAILURE,
  isFetching: false,
  message
});


export const fetchChartsData = () => {
  return dispatch => {
    fetch('http://localhost:4000/api/charts').then(response => {
      return response.json();
    }).then(responseJson => {
      return responseJson;
    }).then(data => {
      if (!data) {
        dispatch(fetchChartsDataFailure("Couldn't fetch charts data"));
        return Promise.reject(data);
      } else {
        dispatch(fetchChartsDataSuccess(data));
        return Promise.resolve(data);
      }
    }).catch(err => console.error('Error: ', err));
  }
};