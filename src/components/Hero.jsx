import React from "react";
import profileImg from "../Images/photo.jpeg";
import { Box, Typography, Button, IconButton } from "@mui/material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.wrapper}>
      {/* 🔵 Background Glow */}
      {/* LEFT CONTENT */}
      <Box sx={styles.content}>
        <Typography sx={styles.name}>
          Prattyancha{" "}
          <span style={styles.gradientText}>Patharkar</span>
        </Typography>

        <Typography sx={styles.role}>
          Frontend Lead • Remote Professional
        </Typography>

        <Typography sx={styles.tagline}>
          Building <span style={styles.bold}>scalable</span>,{" "}
          <span style={styles.bold}>high-performance</span> web applications
          with modern technologies.
        </Typography>

        {/* 🚀 CTA BUTTONS */}
        <Box sx={styles.ctaWrapper}>
          <Button
            component="a"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=prattyancha009@gmail.com"
            target="_blank"
            startIcon={<MailOutlineOutlinedIcon />}
            sx={styles.primaryBtn}
          >
            Start a Project
          </Button>

          <Button onClick={() => navigate("/projects")} sx={styles.secondaryBtn}>
            View Projects
          </Button>
        </Box>

        {/* 🔗 Social Icons */}
        <IconButton href="https://github.com/Pprattyancha/Pprattyancha/blob/main/README.md" target="_blank">
          <GitHubIcon />
        </IconButton>

        <IconButton href="https://www.linkedin.com/in/prattyancha-patharkar/" target="_blank">
          <LinkedInIcon />
        </IconButton>
      </Box>

      {/* RIGHT IMAGE */}
      <Box sx={styles.imgWrapper}>
        <Box sx={styles.imgGlow} />
        <img src={profileImg} alt="profile" style={styles.img} />
      </Box>
    </Box>
  );
};

const styles = {
  wrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: { xs: "column-reverse", md: "row" },
    textAlign: { xs: "center", md: "left" },
    px: { xs: 3, md: 10 },
    gap: 4,
    overflow: "hidden",
  },

  bgGlow: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
    filter: "blur(120px)",
    top: "-100px",
    left: "-100px",
    zIndex: 0,
  },

  content: {
    maxWidth: "600px",
    zIndex: 2,
  },

  name: {
    fontSize: { xs: "2.5rem", md: "3.5rem" },
    fontWeight: 800,
    lineHeight: 1.2,
    color: "rgba(0, 7, 12, 0.6)",
  },

  gradientText: {
    background: "linear-gradient(90deg,#6366F1,#8B5CF6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  role: {
    fontSize: { xs: "1.1rem", md: "1.4rem" },
    mt: 1,
    opacity: 0.9,
  },

  tagline: {
    fontSize: { xs: "1rem", md: "1.15rem" },
    mt: 2,
    lineHeight: 1.6,
    opacity: 0.8,
  },

  bold: {
    fontWeight: 700,
    color: "#111",
  },

  ctaWrapper: {
    display: "flex",
    gap: 2,
    mt: 4,
    flexWrap: "wrap",
    justifyContent: { xs: "center", md: "flex-start" },
  },

  primaryBtn: {
    borderRadius: "30px",
    px: 3,
    py: 1.2,
    fontWeight: 600,
    textTransform: "none",
    background: "linear-gradient(90deg,#6366F1,#8B5CF6)",
    color: "#fff",
    boxShadow: "0 10px 25px rgba(99,102,241,0.4)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 15px 35px rgba(99,102,241,0.6)",
    },
  },

  secondaryBtn: {
    borderRadius: "30px",
    px: 3,
    py: 1.2,
    fontWeight: 600,
    textTransform: "none",
    border: "1px solid rgba(0,0,0,0.2)",
    color: "#333",
    "&:hover": {
      background: "rgba(0,0,0,0.05)",
    },
  },

  socials: {
    display: "flex",
    gap: 2,
    mt: 3,
    justifyContent: { xs: "center", md: "flex-start" },
  },

  icon: {
    cursor: "pointer",
    fontSize: "28px",
    opacity: 0.7,
    transition: "0.3s",
    "&:hover": {
      opacity: 1,
      transform: "scale(1.1)",
    },
  },

  imgWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
  },

  imgGlow: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, #6366F1 0%, transparent 70%)",
    filter: "blur(100px)",
    zIndex: 0,
  },
  img: {
    width: "clamp(220px, 30vw, 320px)",
    borderRadius: "30px",
    objectFit: "cover",
    position: "relative",
    zIndex: 2,
    boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
    transition: "0.4s",
    WebkitMaskImage: `
    linear-gradient(to top, transparent 0%, black 25%, black 75%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%),
    linear-gradient(to left, transparent 0%, black 25%, black 75%, transparent 100%),
    linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)
  `,
    WebkitMaskComposite: "destination-in",
    maskComposite: "intersect",
  }
};

export default Hero;