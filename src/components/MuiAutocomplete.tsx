import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { useState } from "react";

type skill = {
  id: number;
  label: string;
};
const skills = ["HTML", "CSS", "JavaScript", "React", "Redux", "Next.js"];

const skillOptions = skills.map((skillName, index) => ({
  id: index + 1,
  label: skillName,
}));
export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<skill | null>(null);

  console.log({ value });
  console.log({ skill });

  const handleChange = (
    _event: ChangeEvent<object>,
    newValue: string | null
  ) => {
    setValue(newValue);
  };

  const handleSkill = (_event: ChangeEvent<object>, newValue: skill | null) => {
    setSkill(newValue);
  };
  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField label="Skills" {...params} />}
        value={value}
        onChange={handleChange}
        freeSolo
      />
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField label="Skills" {...params} />}
        value={skill}
        onChange={handleSkill}
      />
    </Stack>
  );
};
