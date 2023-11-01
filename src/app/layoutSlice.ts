import { createSlice } from '@reduxjs/toolkit';

const initialState: number = 0;
export const layoutSlice = createSlice({
  name: 'layoutScroll',
  initialState,
  reducers: {
    changeScroll: (state, action): void => state = action.payload,
  }
});
export const layoutState = (state: any) => state.layoutScroll;