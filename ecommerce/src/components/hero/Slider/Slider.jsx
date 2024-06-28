import "./Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import img1 from "../images/banner-15.jpg";
// import img2 from "../images/banner-25.jpg";
import { Box,  Stack,  Typography } from "@mui/material";
function Slider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={img1} alt="" />
        <Box sx={{     position: "absolute",
                      left: "10%",
                      textAlign: "left", }} className="border">
        <Typography
                    sx={{
                      color: "#222",
                    }}
                    variant="h5"
                  >
                    LIFESTYLE COLLECTION
                  </Typography>

                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight: 500,
                      my: 1,
                    }}
                    variant="h3"
                  >
          MEN
                  </Typography>
                  <Stack
                    sx={{
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"#333"} mr={1} variant="h4">
                      SALE UP TO
                    </Typography>
                    <Typography color={"#D23F57"} variant="h4">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 300,
                      my: 1,
                    }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>

                 
        </Box>
      </SwiperSlide>

    </Swiper>
  );
}

export default Slider;
