import React, { useState } from "react";
import { skillList } from "../services/skillList";
import '../styles/glass.css'

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hovered, setHovered] = useState(null);

  const handleOpen = (skill) => {
    setSelectedSkill(skill);
  };

  const handleClose = () => {
    setSelectedSkill(null);
  };

  return (
    <>
      <section
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <h2 style={{ color: "rgba(0, 7, 12, 0.6)", }}>Skills</h2>

        <div className="grid">
          {skillList.map((s) => (
            <div
              key={s.tech}
              className="glass"
              style={{
                ...styles.card,
                border:
                  hovered === s.tech
                    ? "2px solid rgba(99, 102, 241, 0.6),"
                    : "2px solid rgba(99, 102, 241, 0.2)",
                borderRadius:
                  hovered === s.tech
                    ? "20px"
                    : "20px",
                boxShadow:
                  hovered === s.tech
                    ? `0 20px 50px rgba(0,0,0,0.25),
         0 0 50px rgba(99,102,241,0.4)`
                    : `0 10px 20px rgba(0,0,0,0.1)`,
              }}
              onClick={() => handleOpen(s)}
              onMouseEnter={() => setHovered(s.tech)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={s.image}
                alt={s.tech}
                style={{ width: "50px", marginBottom: "10px", cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
      </section >

      {/* ✅ Modal */}
      {
        selectedSkill && (
          <div style={styles.overlay}>
            <div className="glass" style={styles.modal}>
              <h3>{selectedSkill.tech}</h3>

              <img
                src={selectedSkill.image}
                alt={selectedSkill.tech}
                style={{ width: "60px", margin: "10px 0" }}
              />

              <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
                {selectedSkill.description || "No description available."}
              </p>

              <button style={styles.button} onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        )
      }
    </>
  );
};

const styles = {
  card: {
    padding: "15px",
    textAlign: "center",
    cursor: "pointer",
  },

  /* 🔥 Overlay like your screenshot */
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },

  /* 💎 Glass modal */
  modal: {
    width: "400px",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",

    background:
      "linear-gradient(177deg, rgb(35 60 120 / 85%), rgba(200, 214, 235, 0.6))",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",

    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    color: "#fff",
  },

  button: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "20px",
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Skills;