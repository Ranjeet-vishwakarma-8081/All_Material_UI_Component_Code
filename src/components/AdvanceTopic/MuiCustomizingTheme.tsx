import { Box, Stack, styled } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  height: 250,
  width: 250,
  backgroundColor: theme.status.danger,
}));

export const MuiCustomizingTheme = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "secondary.light",
          color: "primary.contrastText",
          padding: "16px",
          borderRadius: 4,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          fontFamily: "Poppins, sans-serif",
          width: 400,
          height: 500,
        }}
      >
        I am a Stack Component
      </Stack>
      <StyledBox />
    </>
  );
};
