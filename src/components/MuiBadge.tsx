import React from "react";
import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>{" "}
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={1000} color="warning" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="error">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="success" invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};
