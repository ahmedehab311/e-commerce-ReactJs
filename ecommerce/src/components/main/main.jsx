import { Stack, Container } from "@mui/material";
import { MainProducts, MainHeader } from "./index";
import "./main.css";
function main() {
  return (
    <Container sx={{ py: 9 }}>
      <Stack>
        <MainHeader />
      </Stack>
      <Stack>
        <MainProducts />
      </Stack>
    </Container>
  );
}

export default main;
