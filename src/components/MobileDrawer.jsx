import React from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Button,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

const MobileDrawer = ({
  open,
  setOpen,
  MenuItems,
  handleNavigation,
  handleOpenResume,
  handleDownload,
  activeItem
}) => {

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 280,
          background:
            "linear-gradient(177deg, rgb(35 60 120 / 85%), rgba(200, 214, 235, 0.6))",
          backdropFilter: "blur(18px)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ p: 3, display: "flex", flexDirection: "column", height: "100%" }}>

        {/* Logo */}
        <Typography
          className="portfolio-logo"
          sx={{ cursor: "pointer", mb: 2 }}
          onClick={() =>
            handleNavigation({ path: "/", section: "home" })
          }
        >
          P<span style={{ color: "#9b86ce" }}>P</span>
        </Typography>

        {/* Menu */}
        <List>
          {MenuItems.map((item, index) => {
            const isActive = activeItem === (item.section || item.label);

            return (
              <ListItemButton
                key={item.path || index}
                onClick={() => handleNavigation(item)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  background: isActive
                    ? "linear-gradient(90deg,#6366F1,#8B5CF6)"
                    : "transparent",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.8)",

                  "&:hover": {
                    background: isActive
                      ? "linear-gradient(90deg,#6366F1,#8B5CF6)"
                      : "rgba(99,102,241,.15)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label || item.section}
                  primaryTypographyProps={{
                    fontSize: "18px",
                    fontWeight: isActive ? 700 : 500,
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>

        {/* Bottom Section */}
        <Box
          sx={{
            mt: "auto",
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* Social Icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              mb: 3,
            }}
          >
            <IconButton
              href="https://github.com/Pprattyancha/Pprattyancha/blob/main/README.md"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/prattyancha-patharkar/"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>

          {/* Resume Open */}
          <Button
            fullWidth
            variant="contained"
            startIcon={<DescriptionIcon />}
            onClick={() => {
              handleOpenResume();  
              setOpen(false);  
            }}
            sx={{
              borderRadius: "40px",
              py: 1.3,
              textTransform: "none",
              fontWeight: 700,
              background: "linear-gradient(90deg,#6366F1,#8B5CF6)",
            }}
          >
            Resume
          </Button>

          {/* Download Resume */}
          <Button
            fullWidth
            onClick={() => {
              handleDownload();
              setOpen(false);
            }}
            sx={{
              mt: 1.5,
              borderRadius: "40px",
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;