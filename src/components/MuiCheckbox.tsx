import React, { ChangeEvent, useState } from "react";
import { Box, FormControlLabel, Checkbox } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  console.log({ acceptTnC });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <CheckBox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};
