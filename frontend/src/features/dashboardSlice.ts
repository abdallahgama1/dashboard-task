import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface DashboardState {
  examTime: string;
  quizzes: { subject: string; dueDate: string }[];
  announcements: string[];
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  examTime: "Math - Jan 30th, 10:00 AM",
  quizzes: [{ subject: "Math", dueDate: "Jan 28th" }],
  announcements: ["School holiday on Feb 5th!"],
  loading: false,
  error: null,
};

// Async Thunk to fetch dashboard data
export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchDashboardData",
  async (userId: string, thunkAPI) => {
    try {
      // Replace this with your actual API call
      const response = await fetch(`/api/dashboard/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.examTime = action.payload.examTime;
        state.quizzes = action.payload.quizzes;
        state.announcements = action.payload.announcements;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dashboardSlice.reducer;