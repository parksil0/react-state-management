const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  // react-redux 안에 들어있음
  console.log("changed"); // 화면 바꿔주는 코드
});

console.log(store.getState());


// actions
const logIn = (data) => {
  return {
    // action
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data,
  };
};

// dispatches
store.dispatch(logIn({
  id: 1,
  name: 'Seal Park',
  admin: true,
}));
console.log('login: ', store.getState());

store.dispatch(addPost({
  userId: 1,
  id: 1,
  content: '안녕하세요 리덕스!',
}));
console.log('add post: ', store.getState());

store.dispatch(addPost({
  userId: 1,
  id: 2,
  content: '안녕하세요 리덕스!!!!!',
}));
console.log('add second post: ', store.getState());

store.dispatch(logOut());
console.log('logout: ', store.getState());

