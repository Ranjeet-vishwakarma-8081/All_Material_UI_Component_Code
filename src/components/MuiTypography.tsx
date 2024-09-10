import { Typography } from "@mui/material";
import React from "react";

const MuiTypography = () => {
  return (
    <div>
      <p>Heading Varients - </p>
      <Typography variant="h1" component="h5">
        H1 Heading
      </Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      <p>Subtittled Varients - </p>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <p>Body Varients - </p>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nam
        adipisci voluptas et natus veniam iste modi eligendi sit? Numquam
        doloremque distinctio asperiores adipisci in, porro quis nam magnam
        similique!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nam
        adipisci voluptas et natus veniam iste modi eligendi sit? Numquam
        doloremque distinctio asperiores adipisci in, porro quis nam magnam
        similique!
      </Typography>
    </div>
  );
};

export default MuiTypography;
