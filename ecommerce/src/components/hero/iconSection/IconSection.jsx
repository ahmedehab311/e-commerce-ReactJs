import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const IconSection = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack direction={"row"}>
      <MyBox icon={<AccessAlarmOutlinedIcon/>}/>
      <MyBox icon={<WorkspacePremiumOutlinedIcon/>}/>
      <MyBox icon={<CreditScoreOutlinedIcon/>}/>
      <MyBox icon={<ElectricBoltIcon/>}/>
      </Stack>
    </Container>
  );
};

export default IconSection;


function MyBox({icon}) {
  return <Box>{icon}</Box>;
}


