const { createStore, applyMiddleware } = require("redux");
const reducer = require('./reducers');
const { logIn, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
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

const enhancer = applyMiddleware(
  firstMiddleware,
  thunkMiddleware,
);

const store = createStore(reducer, initialState, enhancer);

store.subscribe(() => { // react-redux 안에 들어있음
  console.log("changed", store.getState()); // 화면 바꿔주는 코드
});

// dispatches
store.dispatch(logIn({
  id: 1,
  name: 'Seal_Park',
  admin: true,
}));
console.log('login: ', store.getState());

// store.dispatch(addPost({
//   userId: 1,
//   id: 1,
//   content: '안녕하세요 리덕스!',
// }));
// console.log('add post: ', store.getState());

// store.dispatch(addPost({
//   userId: 1,
//   id: 2,
//   content: '안녕하세요 리덕스!!!!!',
// }));
// console.log('add second post: ', store.getState());

// store.dispatch(logOut());
// console.log('logout: ', store.getState());

