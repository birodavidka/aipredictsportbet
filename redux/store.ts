import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import aiReducer from "./aiSlice"; // 🔥 AI ajánlások reducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ai: aiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
