import { ProductDetails } from "..";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog, IconButton, Rating, Stack } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import img from "../t-shirts-products/5/100.jpg";
function MainProducts() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {["aaa", "bbb"].map((item) => {
          return (
            <Card
              key={item}
              sx={{
                maxWidth: 333,
                mt: 6,
                ":hover .MuiCardMedia-root": {
                  scale: "1.1",
                  transition: "0.35s",
                },
              }}
            >
              <CardMedia
                sx={{ height: 277 }}
                image={img}
                title="green iguana"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    t-shert
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    $12.99
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  onClick={handleClickOpen}
                  sx={{ textTransform: "capitalize" }}
                  size="large"
                >
                  <AddShoppingCartOutlinedIcon
                    fontSize="small"
                    sx={{ mr: 1 }}
                  />
                  Add To Cart
                </Button>
                <Rating name="read-only" value={4.3} precision={0.5} readOnly />
              </CardActions>
            </Card>
          );
        })}
      </Stack>

      <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <ProductDetails />
        {/* <ProductDetails clickedProduct={clickedProduct} /> */}
      </Dialog>
    </>
  );
}

export default MainProducts;
