import { createSlice } from '@reduxjs/toolkit';

export const categories = [
  'Essays',
  'Poems',
  'Reviews',
  'Game Analysis',
  'Series Study',
  'Film Critique',
];

export const searchSlice = createSlice({
  name: 'search',
  initialState: { keyword: '', category: 'All' },
  reducers: {
    setSearchKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    clearSearchKeyword: (state) => {
      state.keyword = '';
    },
    setSearchCategory: (state, action) => {
      state.category = action.payload;
    },
    clearSearchCategory: (state) => {
      state.category = '';
    },
  },
});

export const {
  setSearchKeyword,
  clearSearchKeyword,
  setSearchCategory,
  clearSearchCategory,
} = searchSlice.actions;

export const selectSearchKeyword = (state) => state.search.keyword;
export const selectSearchCategory = (state) => state.search.category;

export default searchSlice.reducer;
