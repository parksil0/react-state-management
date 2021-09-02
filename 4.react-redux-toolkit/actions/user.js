const { createAsyncThunk } = require('@reduxjs/toolkit');

const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  
});

const logIn = () => { // async action creator
  return (dispatch, getState) => { // async action
    dispatch(logInRequest());
    try {
      setTimeout(() => {
        dispatch(logInSuccess({
          userId: 1,
          nickname: 'SealPark'
        }));
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
}
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT = "LOG_OUT";
// const = '';
const logInRequest = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
};

const logInSuccess = (data) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  }
};

const logInFailure = (error) => {
  return {
    type: LOG_IN_FAILURE,
    error,
  }
};

module.exports = {
  logIn,
};