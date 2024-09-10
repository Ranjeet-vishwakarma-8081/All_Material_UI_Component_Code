import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);
  const bool = true;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "250px",
        }}
      >
        {loading ? (
          <Skeleton variant="rectangular" width={250} height={144} />
        ) : (
          <img
            src="https://imgs.search.brave.com/K-oeKODYvRsF7gY8Fi4f9pu-JkJgwK3HYtvMXr2UZAI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1nMmdvLmNvbS9h/c3NldHMvaW1nL3Jl/c2l6ZV9pbWFnZXMv/Ymx1ZV9mbG93ZXJf/cmF0aW9fNF8zQDJ4/LnBuZw"
            alt="Skeleton"
            width={250}
            height={144}
          />
        )}
      </Box>

      <Stack
        direction={"row"}
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}
        {loading ? (
          <>
            <Typography variant="body1">
              <Skeleton variant="text" width={200} animation="wave" />
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body1">React MUI Tutorial</Typography>
          </>
        )}
      </Stack>

      <Stack spacing={2} width={"250px"}>
        <Skeleton animation="pulse" />
        <Skeleton variant="text" width={"100%"} animation="wave" />
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton
          variant="rectangular"
          width={"200px"}
          height={100}
          animation={"pulse"}
        />
        <Skeleton variant="rounded" />
        <Typography variant="h1">{bool ? <Skeleton /> : "h1"}</Typography>
      </Stack>
    </>
  );
};
