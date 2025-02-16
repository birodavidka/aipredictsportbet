import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import aiReducer from "./aiSlice";
import themeReducer from "./themeSlice"; // 🔥 Új theme reducer hozzáadása

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ai: aiReducer,
    theme: themeReducer, // 🔥 Téma beállítások Redux-ban
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
