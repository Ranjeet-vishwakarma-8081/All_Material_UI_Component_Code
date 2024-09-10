import { Button, Stack } from "@mui/material";
import React from "react";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import { IconButton } from "@mui/material";
const MuiButtons = () => {
  return (
    <>
      <div>Button varients - </div>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display={"flex"} direction={"column"} spacing={2}>
        <div>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>

        <div>
          <Button variant="outlined" size="small">
            Small
          </Button>
          <Button variant="outlined" size="medium">
            Medium
          </Button>
          <Button variant="outlined" size="large">
            Large
          </Button>
        </div>

        <div>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </div>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button
          variant="contained"
          startIcon={<SendTwoToneIcon />}
          disableElevation
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendTwoToneIcon />} disableRipple>
          Send
        </Button>
        <Button variant="contained" disabled>
          Send
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <IconButton aria-label="sned" onClick={() => alert("Hello Kiri Bafna")}>
          <SendTwoToneIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default MuiButtons;
