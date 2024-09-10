import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
export const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="medium"
          color="inherit"
          edge={"start"}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
          IQ-BOOST Mock Interview
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
