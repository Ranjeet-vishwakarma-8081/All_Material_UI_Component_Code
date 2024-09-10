import React, { useState } from "react";
import { Avatar, Chip, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

export const MuiChip = () => {
  const [chipData, setChipData] = useState<string[]>([
    "Chip 1",
    "Chip 2",
    "Chip 3",
    "Chip 4",
    "Chip 5",
  ]);

  const handleDelete = (chipToDelete: string) => {
    setChipData((prevChips) =>
      prevChips.filter((chip) => chip !== chipToDelete)
    );
  };
  return (
    <Stack direction={"row"} spacing={2}>
      <Chip
        label="Chip 1"
        color="primary"
        size="small"
        avatar={<FaceIcon />}
      ></Chip>

      <Chip
        label="Chip 2"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      ></Chip>
      <Chip
        label="Click"
        color="success"
        onClick={() => alert("Clicked !!")}
      ></Chip>

      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked !")}
        onDelete={() => alert("Deleted!!")}
      ></Chip>

      {chipData.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          color="secondary"
          onDelete={() => handleDelete(chip)}
        />
      ))}
    </Stack>
  );
};
