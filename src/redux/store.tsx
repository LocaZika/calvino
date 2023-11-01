import { layoutSlice } from "@/app/layoutSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    layoutScroll: layoutSlice.reducer,
  }
});