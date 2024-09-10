import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React from "react";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert onClose={() => alert("I am a Default Error")}>
        This is a Default alert!
      </Alert>
      <Alert severity="success">This is a Success alert!</Alert>
      <Alert severity="error">This is a Error alert!</Alert>
      <Alert severity="warning">This is a Warning alert!</Alert>
      <Alert severity="info">This is an Info alert!</Alert>

      <Alert severity="success" variant="outlined">
        This is a Success alert!
      </Alert>
      <Alert severity="error" variant="outlined">
        This is a Error alert!
      </Alert>
      <Alert severity="warning" variant="outlined">
        This is a Warning alert!
      </Alert>
      <Alert severity="info" variant="outlined">
        This is an Info alert!
      </Alert>

      <Alert severity="success" variant="filled">
        <AlertTitle>Success</AlertTitle>
        This is a Success alert!
      </Alert>
      <Alert severity="error" variant="filled">
        <AlertTitle>Error</AlertTitle>
        This is a Error alert!
      </Alert>
      <Alert severity="warning" variant="filled">
        <AlertTitle>Warning</AlertTitle>
        This is a Warning alert!
      </Alert>
      <Alert
        severity="info"
        variant="filled"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Info</AlertTitle>
        This is an Info alert!
      </Alert>
    </Stack>
  );
};
