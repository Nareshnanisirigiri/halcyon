import {
  Box,
  Chip,
  Stack,
  Typography,
  Card,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Icons
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

// DATA
const symptoms = [
  {
    name: "Back Pain",
    image: "/images/back-pain.jpg",
    icon: <AccessibilityNewIcon />,
    desc: "Back pain caused by posture issues, disc problems, or muscle strain.",
  },
  {
    name: "Neck Pain",
    image: "/images/neck-pain.jpg",
    icon: <SelfImprovementIcon />,
    desc: "Neck pain due to cervical spine issues and poor posture.",
  },
  {
    name: "Knee Pain",
    image: "/images/knee-pain.jpg",
    icon: <DirectionsWalkIcon />,
    desc: "Knee pain from arthritis or ligament injuries.",
  },
  {
    name: "Sciatica",
    image: "/images/sciatica.jpg",
    icon: <AirlineSeatReclineExtraIcon />,
    desc: "Radiating pain from the lower back down the leg.",
  },
  {
    name: "Shoulder Pain",
    image: "/images/shoulder-pain.jpg",
    icon: <FitnessCenterIcon />,
    desc: "Shoulder stiffness caused by rotator cuff injuries.",
  },
];

// GRADIENT BUTTON STYLE
const gradientButtonStyle = {
  fontWeight: 700,
  px: 2.5,
  py: 1,
  color: "#fff",
  borderRadius: 30,
  background: "#1CB5B0",
  boxShadow: "0 8px 22px rgba(200,58,122,0.35)",
  transition: "all 0.35s ease",
  "&:hover": {
    background: "linear-gradient(135deg, #1CB5B0, #C83A7A)",
    boxShadow: "0 12px 30px rgba(28,181,176,0.5)",
    transform: "translateY(-3px)",
  },
  "&:active": {
    transform: "scale(0.95)",
  },
};

export default function Symptoms() {
  const [selected, setSelected] = useState(null);
  const [scrolling, setScrolling] = useState(true);

  // IMAGE AUTO SCROLL
  useEffect(() => {
    if (!scrolling) return;

    const container = document.getElementById("image-scroll");
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!container) return;

      scrollAmount += 1;
      container.scrollLeft = scrollAmount;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        scrollAmount = 0;
      }
    }, 16);

    return () => clearInterval(interval);
  }, [scrolling]);

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Typography variant="h3" align="center" gutterBottom>
        Symptoms We Treat
      </Typography>

      {/* CHIPS */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ my: 4, flexWrap: "wrap" }}
      >
        {symptoms.map((s) => (
          <Chip
            key={s.name}
            label={s.name}
            clickable
            sx={gradientButtonStyle}
            onClick={() => {
              setSelected(s);
              setScrolling(false);
            }}
          />
        ))}
      </Stack>

      {/* DETAIL VIEW */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Box
              sx={{
                maxWidth: 900,
                mx: "auto",
                display: "flex",
                gap: 4,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {/* IMAGE */}
              <Box sx={{ flex: 1, minWidth: 280 }}>
                <img
                  src={selected.image}
                  alt={selected.name}
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                  }}
                />
              </Box>

              {/* CONTENT */}
              <Box sx={{ flex: 1, minWidth: 280 }}>
                <Typography variant="h4" gutterBottom>
                  {selected.name}
                </Typography>

                <Typography color="text.secondary" fontSize={17}>
                  {selected.desc}
                </Typography>

                <Chip
                  label="← Back"
                  sx={{ ...gradientButtonStyle, mt: 3 }}
                  onClick={() => {
                    setSelected(null);
                    setScrolling(true);
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* IMAGE SCROLLING ROW */}
      {!selected && (
        <Box
          id="image-scroll"
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "hidden",
            mt: 6,
            px: 2,
          }}
        >
          {symptoms.concat(symptoms).map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07, y: -6 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260 }}
              onClick={() => {
                setSelected(s);
                setScrolling(false);
              }}
              style={{ cursor: "pointer" }}
            >
              <Card
                sx={{
                  minWidth: 260,
                  height: 180,
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                }}
              >
                {/* IMAGE */}
                <img
                  src={s.image}
                  alt={s.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* OVERLAY */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent, rgba(0,0,0,0.75))",
                  }}
                />

                {/* TEXT */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    p: 1.5,
                    color: "#fff",
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  {s.icon}
                  <Typography fontWeight={700}>
                    {s.name}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          ))}
        </Box>
      )}
    </Box>
  );
}
