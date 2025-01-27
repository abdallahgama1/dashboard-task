import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { fetchDashboardData } from "../../features/dashboardSlice";
import { Grid } from "@mui/material";
import ExamTime from "../../components/Widgets/ExamTime";
import WhatsDue from "../../components/Widgets/WhatsDue";
import Announcements from "../../components/Widgets/Announcements";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { examTime, quizzes, announcements, loading, error } = useSelector(
    (state: RootState) => state.dashboard
  );
  

  useEffect(() => {
    const userId = "123"; // Example user ID, replace with actual value
    dispatch(fetchDashboardData(userId)); // Dispatch asyncThunk
  }, [dispatch]);

  // Fallback values when data is loading or if there's an error
  const defaultExamTime = " Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams. ";
  const defaultQuizzes = [{ subject: "No quizzes", dueDate: "N/A" }];
  const defaultAnnouncements = [
    {
      author: "Ms.samantha",
      image: "dasfasdf",
      subject: "Holiday Announcement",
      content: "The school will be closed on February 5th for a public holiday.",
      date: "Jan 27th, 2025",
    },
    {
      author: "Mr.John",
      image: "public/vite.svg",
      subject: "Math Quiz Reminder",
      content: "Don't forget to submit your Math quiz by Jan 28th!",
      date: "Jan 26th, 2025",
    },    {
      author: "Ms.samantha",
      image: "dasfasdf",
      subject: "Holiday Announcement",
      content: "The school will be closed on February 5th for a public holiday.",
      date: "Jan 27th, 2025",
    },
    {
      author: "Mr.John",
      image: "public/vite.svg",
      subject: "Math Quiz Reminder",
      content: "Don't forget to submit your Math quiz by Jan 28th!",
      date: "Jan 26th, 2025",
    },    {
      author: "Ms.samantha",
      image: "dasfasdf",
      subject: "Holiday Announcement",
      content: "The school will be closed on February 5th for a public holiday.",
      date: "Jan 27th, 2025",
    },
    {
      author: "Mr.John",
      image: "public/vite.svg",
      subject: "Math Quiz Reminder",
      content: "Don't forget to submit your Math quiz by Jan 28th!",
      date: "Jan 26th, 2025",
    },
  ];
  
  return (
    <Grid container spacing={2} sx={{ padding: 2 }} mt={8}>
      {/* Top Widget */}
      <Grid item xs={12}>
        <ExamTime examTime={loading ? defaultExamTime : examTime} />
      </Grid>

      {/* Bottom Widgets */}
      <Grid item xs={8}>
        <Announcements announcements={loading || error ? defaultAnnouncements : announcements} />
      </Grid>
      <Grid item xs={4}>
        <WhatsDue quizzes={loading || error ? defaultQuizzes : quizzes} />
      </Grid>
      
    </Grid>
  );
};

export default Dashboard;