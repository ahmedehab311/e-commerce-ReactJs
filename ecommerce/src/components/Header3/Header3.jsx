import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Close } from "@mui/icons-material";
import Links from "../header/Links";
import Categories from "./Categories";
function Header3() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Categories />
      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".css-1sozasi-MuiPaper-root-MuiDrawer-paper": { height: "100%" },
        }}
      >
        <Box
          sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 6 }}
        >
          <IconButton
            sx={{
              ":hover": { rotate: "180deg", color: "red" },
              transition: "0.3s",
              position: "absolute",
              top: 0,
              right: 10,
            }}
          >
            <Close IconButton onClick={toggleDrawer("top", false)} />
          </IconButton>

          {[
            { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
            { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "full screen menu",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
            { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "user account",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLinks.map((subLink) => {
                    return (
                      <ListItemButton
                        key={subLink}
                        sx={{
                          "&:hover": {
                            cursor: "pointer",
                          },
                        }}
                      >
                        <ListItemText>{subLink}</ListItemText>
                      </ListItemButton>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}

export default Header3;
