import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  mode: "light" | "dark";
};

const initialState: ThemeState = {
  mode: typeof window !== "undefined" && localStorage.getItem("theme") === "dark" ? "dark" : "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload); // Mentjük a választást a localStorage-ba is
    },
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
