const { createSlice } = require('@reduxjs/toolkit');
const { addPost } = require('../actions/post');

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
  extraReducers: (builder) => 
    builder.addCase(addPost.pending, (state, action) => {

    })
    .addCase(addPost.fulfilled, (state, action) => {
      state.date.push(action.payload)
    })
    .addCase(addPost.rejected, (state, action) => {

    })
    .addMatcher((action) => { // 공통로직 정의 시
      // return action.type.includes('/pending')
    })
    .addDefaultCase((state, action) => {

    })
})

module.exports = postSlice;
