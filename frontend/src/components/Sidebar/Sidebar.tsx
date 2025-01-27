import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, IconButton, useMediaQuery } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CampaignIcon from '@mui/icons-material/Campaign';
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from "@mui/material/styles";

const Sidebar = ({ open, toggleSidebar }: { open: boolean, toggleSidebar: () => void }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen is mobile-sized

  const navItems = [
    { text: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
    { text: "Schedule", icon: <CalendarMonthIcon />, path: "/schedule" },
    { text: "Courses", icon: <LibraryBooksIcon />, path: "/courses" },
    { text: "Gradebook", icon: <SchoolIcon />, path: "/gradebook" },
    { text: "Performance", icon: <TrendingUpIcon />, path: "/performance" },
    { text: "Announcements", icon: <CampaignIcon />, path: "/announcements" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100%" }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        anchor="left"
        open={open}
        onClose={toggleSidebar} // Close on outside click for mobile view
        sx={{
          width: isMobile ? 200 : 240, 
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isMobile ? 200 : 240, 
            boxSizing: "border-box",
            background: "-webkit-linear-gradient(85deg,rgb(56, 173, 199) 30%,rgb(0, 45, 80) 100%)",
          },
        }}
      >
        <Toolbar />
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component="a"
              href={item.path}
              sx={{
                textDecoration: "none",
                color: "white",
                padding: isMobile ? "10px" : "20px",
                "&:hover": {
                  backgroundColor: "white", 
                  color: "black", 
                  borderRadius: "8px",
                  transition: "all 0.5s ease",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;