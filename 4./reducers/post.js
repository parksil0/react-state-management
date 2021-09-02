const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
  data: [],
};

const postReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "ADD_POST":
        draft.push(action.data);
        break;
      default:
        break;
    }
  })
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: { // sync

  },
  extraReducers: { // async

  }
})

module.exports = postSlice;
