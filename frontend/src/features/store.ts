import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice"; // Assuming you already have a sidebar slice
import dashboardReducer from "./dashboardSlice"; // Add this import

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,   // Keep your sidebar reducer
    dashboard: dashboardReducer, // Add the dashboard reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;