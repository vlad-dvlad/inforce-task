import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
