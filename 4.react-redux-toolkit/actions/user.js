const { createAsyncThunk } = require('@reduxjs/toolkit');

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  console.log(data);
  // throw new Error('비밀번호가 일치하지 않습니다.')
  const result = await delay(500, { // action.payload
    userId: 1,
    nickname: "SealPark",
  });
  return result
});

module.exports = {
  logIn,
};