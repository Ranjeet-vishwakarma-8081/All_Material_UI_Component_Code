import { Button, ButtonGroup, Stack } from "@mui/material";
import React from "react";

const MuiButtonGroup = () => {
  return (
    <>
      <Stack direction={"row"}>
        <ButtonGroup
          variant={"outlined"}
          orientation="vertical"
          aria-label={"outlined primary button group"}
          color="secondary"
          size="small"
        >
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default MuiButtonGroup;
