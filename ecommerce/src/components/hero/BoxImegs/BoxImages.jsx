import { Box, Link, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { img1, img2 } from "../imegsExports";
function BoxImages() {
  return (
    <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
      <Box sx={{ position: "relative" }}>
        <img width={"100%"} src={img2} alt="" />

        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: 15,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#2B3445",
              fontSize: "18px",
            }}
          >
            NEW ARRIVALS
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#2B3445",
              lineHeight: "16px",
              mt: 1,
            }}
          >
            SUMMER
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#2B3445",
            }}
          >
            SALE 20% OFF
          </Typography>

          <Link
            sx={{
              color: "#2B3445",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "0.2s",

              "&:hover": {
                color: "#D23F57",
              },
            }}
            href="#"
            underline="none"
          >
            shop now
            <ArrowForwardIcon sx={{ fontSize: "13px" }} />
          </Link>
        </Stack>
      </Box>

      <Box sx={{ position: "relative" }}>
        <img width={"100%"} src={img1} alt="" />
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: 20,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#2B3445",
              fontSize: "18px",
              fontWeight: 300,
            }}
          >
            GAMING 4K
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#2B3445",
              lineHeight: "16px",
              mt: 1,
            }}
          >
            DESKTOPS &
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#2B3445",
            }}
          >
            LAPTOPS
          </Typography>

          <Link
            sx={{
              color: "#2B3445",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "0.2s",

              "&:hover": {
                color: "#D23F57",
              },
            }}
            href="#"
            underline="none"
          >
            shop now
            <ArrowForwardIcon sx={{ fontSize: "13px" }} />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}

export default BoxImages;
