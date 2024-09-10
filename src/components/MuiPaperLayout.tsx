import { Paper, Stack } from "@mui/material";
import React from "react";

export const MuiPaperLayout = () => {
  return (
    <Paper
      sx={{
        padding: "32px",
      }}
      elevation={5}
    >
      <Stack>Hello World</Stack>
    </Paper>
  );
};
