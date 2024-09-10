import React, { ChangeEvent, useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
const MuiSelectElement = () => {
  const [country, setCountry] = useState("");
  console.log({ country });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };
  return (
    <Box width={"250px"}>
      <TextField
        label={"Select Country"}
        size="small"
        color="info"
        value={country}
        onChange={handleChange}
        helperText="Please select your Country"
        select
        fullWidth
      >
        <MenuItem value={"USA"}>USA</MenuItem>
        <MenuItem value={"UK"}>UK</MenuItem>
        <MenuItem value={"India"}>India</MenuItem>
        <MenuItem value={"China"}>China</MenuItem>
        <MenuItem value={"Japan"}>Japan</MenuItem>
        <MenuItem value={"Germany"}>Germany</MenuItem>
        <MenuItem value={"Russia"}>Russia</MenuItem>
        <MenuItem value={"France"}>France</MenuItem>
        <MenuItem value={"Italy"}>Italy</MenuItem>
        <MenuItem value={"Spain"}>Spain</MenuItem>
        <MenuItem value={"Canada"}>Canada</MenuItem>
        <MenuItem value={"Australia"}>Australia</MenuItem>
        <MenuItem value={"Mexico"}>Mexico</MenuItem>
        <MenuItem value={"Brazil"}>Brazil</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelectElement;
