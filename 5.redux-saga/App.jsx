import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./actions/post";
import { logIn } from "./actions/user";
import userSlice from "./reducers/user";
import { createSelector } from "@reduxjs/toolkit";

const priceSelector = (state) => state.user.prices;
const sumPriceSelector = createSelector(priceSelector, (prices) =>
  prices.reduce((a, c) => a + c, 0)
);

const App = () => {
  const user = useSelector((state) => state.user);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const totalPrices = useSelector(sumPriceSelector);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(
      logIn({
        id: "SealPark",
        password: "1234",
      })
    );
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  const onAddPost = useCallback(() => {
    dispatch(addPost());
  }, []);

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중</div>
      ) : user.data ? (
        <div>{user.data.nickname}</div>
      ) : (
        "로그인 해주세요."
      )}
      {!user.data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
      <div>
        <b>{totalPrices}</b>
      </div>
      <form action="">
        <input type="email" />
        <input type="password" />
      </form>
    </div>
  );
};

export default App;
