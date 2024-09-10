import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  console.log(value);

  const handleChange = (
    _event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#ff9",
      }}
      value={value}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction label={"Home"} icon={<HomeIcon />} />
      <BottomNavigationAction label={"Favorites"} icon={<FavoriteIcon />} />
      <BottomNavigationAction label={"Profile"} icon={<PersonIcon />} />
    </BottomNavigation>
  );
};
