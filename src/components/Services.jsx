import { Grid, Card, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

// MUI Icons
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HealingIcon from "@mui/icons-material/Healing";

const services = [
  {
    title: "Manual Therapy",
    icon: <AccessibilityNewIcon />,
    desc: "Hands-on techniques to reduce pain and improve mobility.",
  },
  {
    title: "Dry Needling",
    icon: <HealingIcon />,
    desc: "Targeted muscle release to relieve chronic pain and tension.",
  },
  {
    title: "Post Surgical Rehab",
    icon: <LocalHospitalIcon />,
    desc: "Structured rehabilitation for faster, safer recovery.",
  },
  {
    title: "Sports Physiotherapy",
    icon: <FitnessCenterIcon />,
    desc: "Injury prevention and performance-focused recovery care.",
  },
];

export default function Services() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 } }}>
      {/* SECTION HEADER */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Our Services
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
          Specialized physiotherapy and pain management services designed
          to restore movement, reduce pain, and improve quality of life.
        </Typography>
      </Box>

      {/* SERVICES GRID */}
      <Grid container spacing={4}>
        {services.map((service, i) => (
          <Grid item xs={12} sm={6} md={4} key={service.title} sx={{width:"220px", height:"300px", ml:4}}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -12 }}
            >
              <Card
                sx={{
                  p: 4,
                  height: "300px",
                  
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    boxShadow:
                      "0 22px 55px rgba(200,58,122,0.25)",
                  },
                }}
              >
                {/* ICON */}
                <Box
                  component={motion.div}
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  sx={{
                    width: 70,
                    height: 70,
                    mx: "auto",
                    mb: 3,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, #C83A7A, #1CB5B0)",
                    color: "#fff",
                    fontSize: 34,
                  }}
                >
                  {service.icon}
                </Box>

                {/* TITLE */}
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {service.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {service.desc}
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
