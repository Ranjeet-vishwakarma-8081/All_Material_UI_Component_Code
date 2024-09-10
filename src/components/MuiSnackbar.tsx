import { Button, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  console.log({ open });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClick}>Submit</Button>
      {/* <Snackbar
        message="Form Submitted Successfully !!"
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        transitionDuration={1000}
      >
        <Alert onClose={handleClose} severity="success">
          Form Submitted Successfully!!
        </Alert>
      </Snackbar>
    </>
  );
};
