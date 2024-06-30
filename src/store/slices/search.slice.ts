import { createSlice } from '@reduxjs/toolkit';

export type SearchState = {
  search: { columnName: string; value: string };
  sort: { columnName: string; order: 'ASC' | 'DESC' };
  pagination: { limit: number; page: number };
  display: 'map' | 'grid';
};

const initialState: SearchState = {
  search: { columnName: '', value: '' },
  sort: { columnName: 'createdAt', order: 'ASC' },
  pagination: { limit: 25, page: 1 },
  display: 'grid',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchParams(state, action) {
      const { search, sort, pagination, display } = action.payload;
      if (search) state.search = search;
      if (sort) state.sort = sort;
      if (pagination) state.pagination = pagination;
      if (display) state.display = display;
    },
    resetSearchParams(state) {
      state.search = { columnName: '', value: '' };
      state.sort = { columnName: 'createdAt', order: 'ASC' };
      state.pagination = { limit: 25, page: 1 };
    },
  },
});

export default searchSlice.reducer;
export const { updateSearchParams, resetSearchParams } = searchSlice.actions;
