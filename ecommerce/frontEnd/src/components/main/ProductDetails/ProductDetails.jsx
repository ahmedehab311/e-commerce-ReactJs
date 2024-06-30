import { Box, Button, Stack, Typography } from "@mui/material";
import img from "../t-shirts-products/5/100.jpg";
import img1 from "../t-shirts-products/5/1 (5).jpg";
import img2 from "../t-shirts-products/5/1 (6).jpg";
import { AddShoppingCartOutlined } from "@mui/icons-material";
function ProductDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={300} src={img} alt="" />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">Men</Typography>
        <Typography
          variant="body1"
          my={0.4}
          color={"crimson"}
          fontSize={"22px"}
        >
          12.2$
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {[img1, img2].map((item) => {
            return <img key={item} width={90} height={100} src={item} alt="" />;
          })}
        </Stack>
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}

export default ProductDetails;
