import React from "react";
import { Box, Grid2 } from "@mui/material";

export const MuiGridLayout = () => {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2>
          <Box p={2} bgcolor={"primary.light"} component={"span"} >
            Item - 1
          </Box>
        </Grid2>
        <Grid2>
          <Box p={2} bgcolor={"primary.light"} component={"span"} >
            Item - 2
          </Box>
        </Grid2>
        <Grid2>
          <Box p={2} bgcolor={"primary.light"} component={"span"} >
            Item - 3
          </Box>
        </Grid2>
        <Grid2>
          <Box p={2} bgcolor={"primary.light"} component={"span"} >
            Item - 4
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};
