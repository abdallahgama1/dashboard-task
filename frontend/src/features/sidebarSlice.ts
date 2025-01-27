import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  activePage: string; // The currently active page
}

const initialState: SidebarState = {
  activePage: 'Dashboard', // Default page
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = sidebarSlice.actions;
export default sidebarSlice.reducer;