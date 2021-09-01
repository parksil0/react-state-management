const { createStore, applyMiddleware, compose } = require("redux");
const { composeWithDevTools } = require('redux-devtools-extension');
const reducer = require('./reducers');
const { logIn, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (next) => (action) => {
  console.log("action logging", action); // 기능 추가
  next(action); // 기본 동작
  // 기능추가
}

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') { // async
    return action(store.dispatch, store.getState);
  }
  return next(action); // sync
};

const enhancer = 
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
