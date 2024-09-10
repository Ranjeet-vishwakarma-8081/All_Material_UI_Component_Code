import React, { ChangeEvent, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

export const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log({ value });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Box>
        <FormControl>
          <FormLabel id="job-experience-group-lebel">
            Year's of Experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-lebel"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="1-2"
              control={<Radio />}
              label="1-2 years"
            />
            <FormControlLabel
              value="3-5"
              control={<Radio />}
              label="3-5 years"
            />
            <FormControlLabel
              value="6-10"
              control={<Radio />}
              label="6-10 years"
            />
            <FormControlLabel
              value="11-20"
              control={<Radio />}
              label="11-20 years"
            />
            <FormControlLabel
              value="21+"
              control={<Radio />}
              label="21+ years"
            />
            <FormControlLabel
              value="0"
              control={<Radio />}
              label="No experience"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};
