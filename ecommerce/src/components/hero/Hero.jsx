import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box2 from "./BoxImegs/Box2";
import Slider from "./Slider/Slider";
function Hero() {
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center" }}>
      <Slider />
      <Box2 />
    </Container>
  );
}

export default Hero;
