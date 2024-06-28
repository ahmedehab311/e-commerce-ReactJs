import {
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WindowIcon from "@mui/icons-material/Window";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { Box, ListItemIcon, ListItemText, Typography } from "@mui/material";
function Categories() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          width: 222,
          bgcolor: theme.palette.mycolor.mainn,
          color: theme.palette.text.secondary,
        }}
      >
        <WindowIcon />
        <Typography
          sx={{
            padding: "0",
            textTransform: "capitalize",
            mx: 1,
          }}
        >
          Categories
        </Typography>
        <Box flexGrow={1} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            width: 220,
            bgcolor: theme.palette.mycolor.mainn,
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ElectricBikeOutlined fontSize="small" />
          </ListItemIcon>

          <ListItemText>Bikes</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LaptopChromebookOutlined fontSize="small" />
          </ListItemIcon>

          <ListItemText>Electronics</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MenuBookOutlined fontSize="small" />
          </ListItemIcon>

          <ListItemText>Books</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SportsEsportsOutlined fontSize="small" />
          </ListItemIcon>

          <ListItemText>Games</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Categories;
