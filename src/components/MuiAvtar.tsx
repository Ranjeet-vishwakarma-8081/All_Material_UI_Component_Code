import { AvatarGroup, Stack } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";

export const MuiAvtar = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={1} direction={"row"}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack spacing={1} direction={"row"}>
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="john Doe"
          />
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        </AvatarGroup>
      </Stack>
      <Stack spacing={1} direction={"row"}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: "48px", height: "48px" }}
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", width: "48px", height: "48px" }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
};
