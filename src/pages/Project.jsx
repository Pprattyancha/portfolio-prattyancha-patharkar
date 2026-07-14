import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const featuredProjects = [
  {
    title: "FinPay App",
    desc: "Built a secure B2B web application and admin panel with token-based workflows and encrypted transaction processing.",
    tech: "React • Redux • Angular • NgRx • Tailwind" ,
  },
  {
    title: "ChatPort",
    desc: "Designed a real-time messaging app with JWT authentication and SMTP-based email verification.",
    tech: "Outsystems • JWT • SMTP • Node Js • MongoDB",
  },
  {
    title: "OpsGraph UI",
    desc: "Integrated Grafana components using TypeScript to enhance multi-type data visualization and usability.",
    tech: "TypeScript • Grafana",
  },
  {
    title: "MLStream Visualizer",
    desc: "Created a monitoring dashboard to visualize machine learning performance using reactive APIs.",
    tech: "React • APIs • Echarts • Matrial UI",
  },
  {
    title: "UrbanData Map",
    desc: "Built a traffic analytics dashboard using React and ECharts for interactive transport data visualization.",
    tech: "React • ECharts, • Redux • React Query • Material UI",
  },
  {
    title: "MediView Timeline",
    desc: "Developed a Redux-based interface to track patient appointments in a chronological timeline.",
    tech: "React • Redux • Material UI",
  },
  {
    title: "CharityPanel",
    desc: "Built a full-stack admin system with PostgreSQL and secure token-based access with UI/UX collaboration.",
    tech: "React • Material UI • Node • PostgreSQL",
  },
  {
    title: "PlanMate",
    desc: "Engineered a task management tool with serverless integration to improve team productivity and tracking.",
    tech: "Serverless • React • Redux • Jotai • Material UI",
  },
  {
    title: "WorkSync HR",
    desc: "Developed an employee onboarding system using React and Node.js with Docker-based scalable deployment.",
    tech: "React • Redux • Material UI • Jotai • Node • Docker",
  },
];

const styles = {
  accordion: {
    borderRadius: "16px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    color: "#000",
    "&:before": { display: "none" },
  },
  card: {
    borderRadius: "12px",
    background: "rgba(255,255,255,0.05)",
    color: "#000",
    p: 2,
  },
  btn: {
    mr: 1,
    mt: 1,
    borderRadius: "20px",
    textTransform: "none",
  },
};

const Project = () => {
  return (
    <Box sx={lightGlassNavbar}>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ color: "rgba(0, 7, 12, 0.7)", mb: 2 }}
      >
        Work Experience Projects
      </Typography>

      <Box sx={{ display: "grid", gap: 2 }}>
        {featuredProjects.map((p, index) => (
          <Accordion key={index} sx={styles.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600} sx={{ color: "rgba(0, 7, 12, 0.6)",}}>{p.title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography sx={{ color: "rgba(0, 7, 12, 0.6)",}}>{p.desc}</Typography>

              <Typography sx={{ mt: 1, fontSize: "0.9rem" }}>
                {p.tech}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};


const lightGlassNavbar = {
  minHeight: {
    xs: "89dvh",  
    sm: "100dvh", 
    md: "92dvh",   
    lg: "85vh",   
  },
  overflowY: "auto", 
  padding: "20px",

  background: "radial-gradient(circle, #bfcde9 0%, transparent 90%)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
  position: "relative",

  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export default Project;