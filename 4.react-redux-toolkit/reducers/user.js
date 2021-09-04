const { createSlice } = require('@reduxjs/toolkit');
const { logIn } = require('../actions/user');

const initialState = {
  isLoggingIn: false,
  data: null,
  email: '',
  password: '',
  prices: Array(100).fill().map((v, i) => (i + 1) * 100),
};

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "LOG_IN_REQUEST":
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case "LOG_IN_SUCCESS":
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case "LOG_IN_FAILURE":
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case "LOG_OUT":
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      default:
        break;
    }
  });
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // sync
    logOut(state, action) {
      state.data = null;
    }
  },
  extraReducers: {
    // async
    [logIn.pending](state, action) { // user/logIn/pending
      state.isLoggingIn = true;
    },
    [logIn.fulfilled](state, action) { // user/logIn/fulfilled
      state.data = action.payload; // id, nickname
      state.isLoggingIn = false;
    },
    [logIn.rejected](state, action) { // user/logIn/rejected
      state.data = null;
      state.isLoggingIn = false;
    },
  },
});

module.exports = userSlice;
 