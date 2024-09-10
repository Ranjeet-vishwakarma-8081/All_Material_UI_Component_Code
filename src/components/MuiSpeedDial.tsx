import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";
import CopyIcon from "@mui/icons-material/ContentCopy";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import EditIcon from "@mui/icons-material/Edit";

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      sx={{
        transform: "scale(1)",
        position: "absolute",
        bottom: 20,
        right: 20,
      }}
    >
      <SpeedDialAction icon={<SettingsIcon />} tooltipTitle={"Setting"} />
      <SpeedDialAction icon={<CopyIcon />} tooltipTitle={"Copy"} />
      <SpeedDialAction icon={<HelpIcon />} tooltipTitle={"Help"} tooltipOpen />
    </SpeedDial>
  );
};
