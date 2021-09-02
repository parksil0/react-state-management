const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit');
const reducer = require('./reducers');
const { logIn, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');

// custom middleware
const firstMiddleware = (store) => (next) => (action) => {
  console.log("action logging", action); // 기능 추가
  next(action); // 기본 동작
  // 기능추가
}

const store = configureStore({
  reducer,
  // middleware: [firstMiddleware, ...getDefaultMiddleware], // getDefaultMiddleware는 deprecated됨
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(firstMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
  // preloadedState: // ssr 전용
});

module.exports = store;
