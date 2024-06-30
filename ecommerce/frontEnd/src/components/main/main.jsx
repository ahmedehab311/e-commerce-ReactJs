import { Stack, Container } from "@mui/material";
import { MainProducts, MainHeader } from "./index";
import "./main.css";
import { useGetoneProductByNameQuery } from "../../redux/oneProduct";
function Main() {
  // eslint-disable-next-line no-unused-vars
  const { data, error, isLoading } = useGetoneProductByNameQuery(
    "products?populate=*"
  );
  // console.log(data);
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

export default Main;
