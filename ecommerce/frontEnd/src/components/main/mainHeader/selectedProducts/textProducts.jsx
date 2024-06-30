import { Box, Typography } from "@mui/material";

function TextProducts() {
  return (
    <Box sx={{flexGrow:1}}>
      <Typography variant="h6">Selected Products</Typography>
      <Typography fontWeight={300} variant="body1">
        All our new arrivals in a exclusive brand selection
      </Typography>
    </Box>
  );
}

export default TextProducts;
