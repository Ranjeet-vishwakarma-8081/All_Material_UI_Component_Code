import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export const MuiCardLayout = () => {
  return (
    <Box width="300px">
      <Card variant="elevation">
        <CardContent>
          <CardMedia
            component={"img"}
            height={"300px"}
            image="https://images.unsplash.com/photo-1724812773684-e93ac802c2e0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={"unsplash images"}
            alt={"unsplash images"}
          />
          <Typography gutterBottom variant="h5" component={"div"}>
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page of mobile
            Applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
