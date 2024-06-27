import { Typography } from "@mui/material";

function Logo() {
  return (
    <>
      <Typography
        sx={{
          mr: 2,
          p: "4px 10px",
          bgcolor: "#D23F57",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: "bold",
          color: "#fff",
        }}
        variant="body2"
      >
        HOT
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 300,
          color: "#fff",
        }}
        variant="body2"
      >
        Free Express Shipping
      </Typography>
    </>
  );
}

export default Logo;
