import React from "react";
import { Card, CardContent, Typography, Divider, Box, Avatar, dividerClasses, Grid } from "@mui/material";

interface Announcement {
  author: string;
  image: string;
  subject: string;
  content: string;
  date: string;
}

interface AnnouncementsProps {
  announcements: Announcement[];
}

const Announcements: React.FC<AnnouncementsProps> = ({ announcements }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom mb={2}>
          Announcements
        </Typography>
        {announcements.length > 0 ? (
          announcements.map((announcement, index) => (
            <Box key={index} mb={1} sx={{
              display: 'flex',
              color: 'text.secondary',
              '& svg': {
                m: 1,
              },
              [`& .${dividerClasses.root}`]: {
                mx: 0.5,
              },
            }}>

              <Grid container variant="body2"  flexItem xs={3} mb={2}>
                <Avatar alt="avatar" sx={{ mx: .6 }} src={announcement.image }/>
                <Typography variant="body2" gutterBottom >
                  <div style={{ fontWeight: 'bold', color: 'black' }}>{announcement.author}</div>
                  <div>{announcement.subject}</div>
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid container gutterBottom xs={9}>
                <div>{announcement.content}</div>
              </Grid>
              <div/>
            </Box>
          ))
        ) : (
          <Typography>No announcements available</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Announcements;