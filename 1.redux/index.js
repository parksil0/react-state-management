const { createStore } = require('redux');

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        ...prevState,
        compA: action.data,
      };
    default :
      return prevState;
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);

store.subscribe(() => { // react-redux 안에 들어있음
  console.log("changed"); // 화면 바꿔주는 코드
});

console.log(store.getState());


const changeCompA = (data) => {
  return { // action
    type: 'CHANGE_COMP_A',
    data,
  }
};

store.dispatch(changeCompA('b'));

console.log(store.getState());

