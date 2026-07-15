
import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import MapComponent from "../components/MapComponent";

export default function Dashboard() {

  return (
    <Box
      sx={lightGlassNavbar}
    >
      <Hero />
      <Skills />
      <MapComponent/>
    </Box>
  );
}
const lightGlassNavbar = {
  minHeight: {
    xs: "auto", 
    sm: "100vh",   
    md: "95vh",  
    lg: "91vh"},   
  background: {
    xs: "linear-gradient(180deg, rgba(191,205,233,0.4), transparent)",
    md: "radial-gradient(circle, #bfcde9 0%, transparent 90%)",
  },

  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",

  border: "1px solid rgba(255,255,255,0.2)",

  boxShadow: {
    xs: "0 2px 10px rgba(0,0,0,0.15)",
    md: "0 4px 20px rgba(0,0,0,0.25)",
  },

  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
    opacity: { xs: 0.5, md: 0.7 },
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
    opacity: { xs: 0.5, md: 0.7 },
  },
};