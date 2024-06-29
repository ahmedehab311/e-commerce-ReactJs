import { Stack } from "@mui/material";
import { TextProducts, ToggleFilter } from "../index";
function MainHeader() {
  return <Stack 
  sx={{mt:3}}
    direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}>
    <TextProducts/>
    <ToggleFilter/>
  </Stack>;
}

export default MainHeader;
