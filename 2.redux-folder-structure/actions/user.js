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
      logInFailure(e);
    }
  };
}

const logInRequest = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  }
};

const logInSuccess = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  }
};

const logInFailure = (error) => {
  return {
    type: 'LOG_IN_FAILURE',
    error,
  }
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

module.exports = {
  logIn,
  logOut,
};