import React, { useState, MouseEvent } from "react";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
const MuiToggleButton = () => {
  const [formats, setFormat] = useState<string[]>([]);
  console.log({ formats });

  const handleFormatChange = (
    _event: MouseEvent<HTMLElement>,
    updatedFormat: string[]
  ) => {
    setFormat(updatedFormat);
  };
  return (
    <>
      <div>Text Formatting - </div>
      <Stack direction={"row"}>
        <ToggleButtonGroup
          aria-label="Text Formating"
          value={formats}
          onChange={handleFormatChange}
        >
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={"underline"} aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};

export default MuiToggleButton;
