import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Modal,
  Typography,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
const Experience = () => {
  const [open, setOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");
  const experiences = [
    {
      company: "Greenpay Network Private Limited",
      role: "Frontend Lead",
      duration: "Mar 2024 – Present",
      description:
        "Leading a team of 4+ frontend engineers to build scalable fintech applications. Improved application performance by 30% and implemented modern UI architectures using React, Redux, and Material UI.",
      tech: ["React", "Redux", "Material UI", "TypeScript", "Angular"],
    },
    {
      company: "Thinkonic Software Private Limited",
      role: "Frontend Developer",
      duration: "2023 – 2024",
      description:
        "Developed responsive and high-performance web applications using Angular and React. Worked closely with backend teams to integrate REST APIs and improved UI/UX consistency across products.",
      tech: ["React", "JavaScript", "Bootstrap", "Node js", "AWS"],
    },
    {
      company: "Konverge AI",
      role: "Software Developer",
      duration: "2021 – 2023",
      description:
        "Built data-driven dashboards and analytics interfaces. Collaborated on AI-based solutions and implemented interactive visualizations for better decision-making.",
      tech: ["React", "Node.js", "MySQL", "Charts", "CSS", "Material UI", "Outsystems"],
    },
  ];
  const handleOpen = (company) => {
    setSelectedCompany(company);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box sx={lightGlassNavbar}>
      <section>
        <h2 style={{ color: "rgba(0, 7, 12, 0.6)", }}>Experience</h2>

        <div style={styles.grid}>
          {experiences.map((p) => (
            <Card key={p} className="glass" style={styles.card}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center", 
                  gap: 1.5,               
                }}
              >
                <CorporateFareIcon sx={{ fontSize: 28, color: "rgba(0, 7, 12, 0.6)", }} />
                <h3 style={{ margin: 0, color: "rgba(0, 7, 12, 0.6)", }}>{p.company}</h3>
              </Box>

              <Button
                variant="contained"
                startIcon={<DescriptionIcon />}
                onClick={() => handleOpen(p)}
                sx={styles.button}
              >
                View
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <Modal open={open} onClose={handleClose}>
        <Box sx={styles.modal}>
          <Typography variant="h6" fontWeight={700}>
            {selectedCompany.company}
          </Typography>

          <Box sx={{ mt: 1 }}>
            <Typography>{selectedCompany.role}</Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {selectedCompany.duration}
            </Typography>
          </Box>

          <Typography sx={{ mt: 2, lineHeight: 1.6 }}>
            {selectedCompany.description}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Technologies used:{" "}
            {selectedCompany?.tech?.join("  •  ")}
          </Typography>

          <Button
            onClick={handleClose}
            sx={styles.button}
            variant="contained"
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 15,
    width: "100%",
  },

  card: {
    padding: "20px",
    borderRadius: "16px",
    boxShadow: 24,
    color: "#fff",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  },

  button: {
    mt: 5,
    ml: 1,
    borderRadius: "40px",
    px: 3,
    py: 1,
    textTransform: "none",
    fontWeight: 700,
    background: "linear-gradient(90deg,#6366F1,#8B5CF6)",
    "&:hover": {
      background: "linear-gradient(90deg,#4F46E5,#7C3AED)",
    },
  },

  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    width: {
      xs: "90%",   
      sm: "80%",  
      md: "500px",
    },

   
    maxHeight: "85vh",
    overflowY: "auto",

    
    p: {
      xs: 2,
      sm: 3,
      md: 4,
    },

    
    background:
      "linear-gradient(177deg, rgb(35 60 120 / 85%), rgba(200, 214, 235, 0.6))",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",

    borderRadius: "16px",
    boxShadow: 24,
    color: "#fff",
  }
};

const lightGlassNavbar = {
  minHeight: {
    xs: "92dvh",  
    sm: "100dvh",   
    md: "92dvh",   
    lg: "82vh",
  },
  background: "radial-gradient(circle, #bfcde9 0%, transparent 90%)",
  backdropFilter: "blur(16px)",
  WebkitBacpaddingkdropFilter: "blur(16px)",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
  position: "relative",
  padding: '2%',
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
export default Experience;