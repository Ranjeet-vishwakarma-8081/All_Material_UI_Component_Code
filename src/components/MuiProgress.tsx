import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

export const MuiPrograss = () => {
  return (
    <Stack spacing={3}>
      <CircularProgress />
      <CircularProgress variant="determinate" value={70} />
      <LinearProgress />
      <LinearProgress variant="determinate" value={70} />
    </Stack>
  );
};
