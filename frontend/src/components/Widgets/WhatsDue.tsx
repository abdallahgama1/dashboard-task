import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface WhatsDueProps {
  quizzes: { subject: string; dueDate: string }[];
}

const WhatsDue: React.FC<WhatsDueProps> = ({ quizzes }) => {
  return (
    <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
          What's Due
        </Typography>
        {quizzes.length > 0 ? (
          quizzes.map((quiz, index) => (
            <Box key={index} sx={{ marginBottom: 1 }}>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                {quiz.subject} - {quiz.dueDate}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No quizzes due</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default WhatsDue;