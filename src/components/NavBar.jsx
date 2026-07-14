import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Modal,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

import { useNavigate, useLocation } from "react-router-dom";
import MenuItems from "../services/MenuItems";
import resume from "../Images/Resume_Prattyancha_Patharkar_MERN_MEAN_5Yrs.pdf";
import MobileDrawer from "./MobileDrawer";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [openResume, setOpenResume] = useState(false);
  const [active, setActive] = useState(() => {
    return localStorage.getItem("activeMenu") || "home";
  });
  const [activeItem, setActiveItem] = useState(() => {
    return localStorage.getItem("activemenu") || "home";
  });

  const handleOpenResume = () => setOpenResume(true);
  const handleCloseResume = () => setOpenResume(false);

  const handleDownload = () => {
    const fileUrl = resume;

    // 📱 Mobile (iOS Safari / Android)
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.open(fileUrl, "_blank"); // opens in new tab (user can download manually)
      return;
    }

    // 💻 Desktop
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute(
      "download",
      "Resume_Prattyancha_Patharkar_MERN_MEAN_5Years.pdf"
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavigation = (item) => {
    setActiveItem(item.section || item.label);
    localStorage.setItem("activemenu", item.section);
    if (location.pathname === item.path && item.section) {
      const el = document.getElementById(item.section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(item.path, { state: { section: item.section } });
    }
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={styles.navbar}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 5 } }}>
          <Typography
            className="portfolio-logo"
            onClick={() => handleNavigation({ path: "/", section: "home" })}
          >
            P<span style={{
              color: "#3a2274"
            }}>P</span>
          </Typography>

          {/* Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {MenuItems.map((item) => (
              <Button
                key={item.section}
                onClick={() => {
                  setActive(item.section);
                  localStorage.setItem("activeMenu", item.section);
                  handleNavigation(item);
                }}
                sx={{
                  color: active === item.section ? "#fff" : "rgba(255,255,255,0.7)",
                  background:
                    active === item.section
                      ? "linear-gradient(90deg,#6366F1,#8B5CF6)"
                      : "transparent",
                  borderRadius: "20px",
                  px: 2,
                  transition: "0.3s",
                  "&:hover": {
                    background: "linear-gradient(90deg,#6366F1,#8B5CF6)",
                    color: "#fff",
                  },
                }}
              >
                {item.section}
              </Button>
            ))}
            <IconButton href="https://github.com/Pprattyancha/Pprattyancha" target="_blank">
              <GitHubIcon />
            </IconButton>

            <IconButton href="https://www.linkedin.com/in/prattyancha-patharkar/" target="_blank">
              <LinkedInIcon />
            </IconButton>

            <Button
              onClick={handleOpenResume}
              startIcon={<DescriptionIcon />}
              sx={styles.button}
              variant="contained"
            >
              Resume
            </Button>
          </Box>

          {/* Mobile Menu */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {/* Mobile Drawer */}
      <MobileDrawer
        open={open}
        setOpen={setOpen}
        MenuItems={MenuItems}
        handleNavigation={handleNavigation}
        handleOpenResume={handleOpenResume}
        handleDownload={handleDownload}
        activeItem={activeItem}
      />

      {/* Resume Modal */}
      <Modal open={openResume} onClose={handleCloseResume}>
        <Box sx={styles.modal}>
          <iframe
            src={resume}
            title="Resume"
            style={{ width: "100%", height: "70vh", border: "none" }}
          />

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button fullWidth onClick={handleCloseResume}>
              Close
            </Button>

            <Button fullWidth onClick={handleDownload} variant="contained">
              Download
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const styles = {
  navbar: {
    marginBottom: '50%',
    background:
      "linear-gradient(177deg, rgb(35 60 120 / 85%), rgba(200, 214, 235, 0.6))",
    backdropFilter: "blur(18px)",
  },

  button: {
    borderRadius: "40px",
    px: 3,
    background: "linear-gradient(90deg,#6366F1,#8B5CF6)",
  },

  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", md: "70%" },
    p: 2,
    borderRadius: "12px",
    background: "#0f172a",
  },
};

export default NavBar;