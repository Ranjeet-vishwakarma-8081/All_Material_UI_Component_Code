import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";
export const MuiSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  console.log({ darkMode });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        sx={{ color: "darkgoldenrod" }}
        control={
          <Switch
            checked={darkMode}
            onChange={handleChange}
            size="small"
            color="secondary"
          />
        }
      />
    </Box>
  );
};
