import { ChangeEvent, useState } from "react";
import { Rating, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });

  const handleRating = (
    _event: ChangeEvent<object>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={3}>
      <Rating
        value={value}
        onChange={handleRating}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon />}
        emptyIcon={<FavoriteBorderIcon />}
        highlightSelectedOnly
      />
    </Stack>
  );
};
