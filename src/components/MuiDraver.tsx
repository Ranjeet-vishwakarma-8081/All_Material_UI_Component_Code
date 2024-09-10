import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
export const MuiDraver = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setDrawerOpen(!isDrawerOpen)}
        aria-label="logo"
      >
        <MenuIcon />
      </IconButton>
      
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box p={2} width={250} textAlign={"center"}>
          <Typography variant="h6" component={"div"}>
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
