import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Rating,
  Modal,
  Card,
  CardContent,
} from "@mui/material";

import { getReviews, addReview } from "../services/apiList";

const Review = () => {
  const [form, setForm] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

 
  const fetchReviews = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getReviews();
      setReviews(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (_, value) => {
    setForm((prev) => ({ ...prev, rating: value || 0 }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.comment) return;

    try {
      await addReview(form);
      setForm({ name: "", rating: 0, comment: "" });
      setOpen(false);
      fetchReviews();
    } catch (err) {
      console.error("Error adding review:", err);
    }
  };

  return (
    <Box sx={lightGlassNavbar}>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          px: { xs: 2, sm: 3, md: 4 },
          py: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color: "rgba(0, 7, 12, 0.6)", }}
        >
          Reviews
        </Typography>

        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={styles.button}
        >
          + Add Review
        </Button>
      </Box>

    
      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {loading ? (
          <Typography sx={{ color: "rgba(0, 7, 12, 0.6)", }}>Loading...</Typography>
        ) : reviews.length > 0 ? (
          reviews.map((r, index) => (
            <Card key={r.id || index} sx={styles.card}>
              <CardContent>
                <Typography fontWeight={700} sx={{ color: "rgba(0, 7, 12, 0.6)", }}>
                  {r?.name || "Anonymous"}
                </Typography>

                <Rating value={Number(r?.rating) || 0} readOnly />

                <Typography sx={{ color: "rgba(0, 7, 12, 0.6)",  mt: 1 }}>
                  {r?.comment || "No comment"}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No reviews available</Typography>
        )}
      </Box>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={styles.modal}>
          {/* Close Button */}
          <Typography
            onClick={() => setOpen(false)}
            sx={{
              cursor: "pointer",
              textAlign: "right",
              fontWeight: 700,
            }}
          >
            ✕
          </Typography>

          <Typography variant="h6" fontWeight={700}>
            Add Review
          </Typography>

          <TextField
            fullWidth
            name="name"
            label="Name"
            value={form.name}
            onChange={handleChange}
            sx={styles.input}
          />

          <Box sx={{ mt: 2 }}>
            <Typography>Rating</Typography>
            <Rating value={form.rating} onChange={handleRating} />
          </Box>

          <TextField
            fullWidth
            multiline
            rows={3}
            name="comment"
            label="Comment"
            value={form.comment}
            onChange={handleChange}
            sx={styles.input}
          />

          <Button onClick={handleSubmit} sx={{ ...styles.button, mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

const styles = {
  button: {
    borderRadius: "30px",
    px: 3,
    py: 1,
    fontWeight: 600,
    background: "linear-gradient(90deg,#6366F1,#8B5CF6)",
    color: "#fff",
    "&:hover": {
      background: "linear-gradient(90deg,#4F46E5,#7C3AED)",
    },
  },

  card: {
    borderRadius: "16px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    color: "#141313",
    minHeight: "140px",
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },

  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "80%", md: "40%" },
    p: { xs: 2, sm: 3 },
    borderRadius: "20px",
    background:
      "linear-gradient(177deg, rgba(129,166,227,0.25), rgba(243,236,236,0.15))",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.2)",
  },

  input: {
    mt: 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      background: "rgba(255,255,255,0.4)",
    },
  },
};

const lightGlassNavbar = {
  minHeight: {
    xs: "auto",
    sm: "100vh",  
    md: "91vh",
  },
  background: "radial-gradient(circle, #bfcde9 0%, transparent 90%)",
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

export default Review;