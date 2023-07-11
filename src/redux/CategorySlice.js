import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const CategorySlice = createSlice({
  name: "CategorySlice",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = CategorySlice.actions;
export default CategorySlice.reducer;
