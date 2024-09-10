import React from "react";
import { Stack, Box, Divider } from "@mui/material";
export const MuiStackLayout = () => {
  return (
    <Stack
      sx={{
        border: "1px solid",
      }}
      direction={"row"}
      spacing={4}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "200px",
          width: "200px",
        }}
      >
        MuiStackLayout
      </Box>
      <Box
        sx={{
          backgroundColor: "success.light",
          height: "200px",
          width: "200px",
        }}
      >
        Stack Layout
      </Box>
    </Stack>
  );
};
