import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { images } from "../assets/Images/Images"; // Adjust path as needed

export const WebHeader: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const navItems: string[] = ["Home", "About Us", "Services", "Pricing", "Contact"];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleNavItemClick = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Top AppBar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ p: "5px 0px", backgroundColor: "#fff" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            component="img"
            src={images.logincompany}
            alt="Logo"
            sx={{ height: 45 }}
          />

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  textTransform: "none",
                  fontSize: "15px",
                  borderRadius: "999px",
                  border: "1px solid transparent",
                  padding: "4px 20px",
                  color: "var(--midnight)",
                  "&:hover": {
                    border: "1px solid var(--primary)",
                    background: "transparent",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Login Button */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "20px",
                padding: "5px 40px",
                backgroundColor: "var(--primary)",
                color: "#fff",
                transition: ".3s",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              Login
            </Button>
          </Box>

          {/* Hamburger Menu for Mobile */}
          <IconButton
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{
              display: { md: "none" },
              backgroundColor: "var(--primary) !important",
              color: "var(--softGrey)",
              marginRight: "0px",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            color: "var(--midnight)",
          }}
          role="presentation"
        >
          {/* Logo and Close Button */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src={images.logincompany}
                alt="Logo"
                sx={{ height: 40, mr: 1 }}
              />
            </Box>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ bgcolor: "rgba(0,0,0,0.1)" }} />

          {/* Navigation Items */}
          <List sx={{ flexGrow: 1 }}>
            {navItems.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={handleNavItemClick}
                  sx={{
                    borderRadius: "20px",
                    mx: 2,
                    my: 1,
                    "&:hover": {
                      bgcolor: "rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Login Button at Bottom */}
          <Box sx={{ p: 2 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                textTransform: "none",
                borderRadius: "20px",
                background: "var(--primary)",
                color: "var(--softGrey)",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
