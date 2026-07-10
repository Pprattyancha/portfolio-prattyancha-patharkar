
import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

export default function Dashboard() {

  return (
    <Box
      sx={lightGlassNavbar}
    >
      <Hero />
      <Skills />
    </Box>
  );
}
const lightGlassNavbar = {
  minHeight: "84vh",
  background:
    "linear-gradient(177deg, rgba(129, 166, 227, 0.25), rgba(243, 236, 236, 0.15))",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
    opacity: 0.7,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
    opacity: 0.7,
  },
};