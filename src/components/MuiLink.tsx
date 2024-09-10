import { Link, Stack } from "@mui/material";
import React from "react";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link href="#" variant="h5" aria-label="To learn more, visit the About page which opens in a new window.">
        Primary_Link
      </Link>
      <Link href="#" color="secondary" underline="always">
        Secondary_Link
      </Link>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Wrong_Link
      </Link>
    </Stack>
  );
};
