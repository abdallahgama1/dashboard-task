import React from "react";
import { Button, Card, CardContent, Container, Typography } from "@mui/material";
interface ExamTimeProps {
  examTime: string;
}

const ExamTime: React.FC<ExamTimeProps> = ({ examTime }) => {
  return (
    <Card>
      <CardContent >
        <Container  sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
          <Typography>
            <Typography gutterBottom variant="h4" sx={{
              fontWeight: 'bold',
              background: "-webkit-linear-gradient(45deg,rgb(0, 45, 80) 30%,rgb(85, 219, 201) 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }} component="div">
              Exam Time
            </Typography>
            <Typography variant="body2">
              Here we are  Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams.
            </Typography>

            <Typography variant="body2">
              "Nothing happens until something moves." - Albert Einstein
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>View exams tips</Button>  
          </Typography>
          

          <img src="slogan.svg" alt="slogan" style={{ maxWidth: "250px" }} />
        </Container>
      </CardContent>
    </Card>
  );
};

export default ExamTime;