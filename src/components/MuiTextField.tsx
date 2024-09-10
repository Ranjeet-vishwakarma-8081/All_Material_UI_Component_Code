import React, { useState } from "react";

import { InputAdornment, Stack, TextField } from "@mui/material";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Stack spacing={4}>
        <Stack direction={"row"}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        <Stack spacing={3} direction={"row"}>
          <TextField
            label="Small Secondary Name"
            size="small"
            color="secondary"
          />
        </Stack>
        <Stack spacing={3} direction={"row"}>
          <TextField
            label="Name Required"
            size="small"
            color="primary"
            required
          />
          <TextField
            label="Password"
            size="small"
            color="primary"
            helperText="Please enter your password"
          />
        </Stack>
      </Stack>
      <Stack spacing={4} direction={"row"}>
        <TextField label={"Username"} disabled />
        <TextField label={"Email"} type="email" />
        <TextField label={"Phone Number"} InputProps={{ readOnly: true }} />
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>

      <Stack direction={"row"} spacing={4}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Don't share your Password to anyone"
          }
        />
      </Stack>
    </>
  );
};

export default MuiTextField;
