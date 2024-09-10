import React from "react";
import { Box } from "@mui/material";
export const MuiBoxLayout = () => {
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",

          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        MuiBox
      </Box>

      <Box
        display={"flex"}
        height={"200px"}
        width={"200px"}
        bgcolor={"success.light"}
        p={2}
      >
        Material UI System Property
      </Box>
    </>
  );
};
