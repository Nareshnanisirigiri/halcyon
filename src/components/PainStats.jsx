import { Box, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ✅ Smooth counter hook (0 → target, reset-safe) */
function useCounter(target, duration = 2200) {
  const [count, setCount] = useState(0);
  const startTime = useRef(null);

  useEffect(() => {
    startTime.current = null; // RESET on target change
    let raf;

    const animate = (time) => {
      if (!startTime.current) startTime.current = time;

      const progress = Math.min(
        (time - startTime.current) / duration,
        1
      );

      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * target;

      setCount(value);

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return count;
}

export default function PainStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Targets
  const worldPain = useCounter(isInView ? 30 : 0);
  const indiaChronic = useCounter(isInView ? 19.3 : 0);
  const consultGP = useCounter(isInView ? 71.2 : 0);
  const consultSpecialist = useCounter(isInView ? 4.8 : 0);

  const stats = [
    {
      value: worldPain,
      suffix: "%",
      text: "Of the World's Population\nsuffers from pain",
    },
    {
      value: indiaChronic,
      suffix: "%",
      text: "Of Indians suffer\nfrom chronic pain",
    },
    {
      value: consultGP,
      suffix: "%",
      text:
        "Of Indians suffer from pain\nbut consult a general physician",
    },
    {
      value: consultSpecialist,
      suffix: "%",
      text:
        "Of Indians consult a\nspecialist in pain management",
    },
  ];

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, rgba(200,58,122,0.08), rgba(28,181,176,0.08))",
      }}
    >
      {/* Animated background glow */}
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 20%, rgba(200,58,122,0.15), transparent 60%), radial-gradient(circle at 70% 80%, rgba(28,181,176,0.15), transparent 60%)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            The Reality of Pain
          </Typography>

          <Typography
            align="center"
            color="text.secondary"
            sx={{ maxWidth: 620, mx: "auto", mb: 6 }}
          >
            Pain affects millions worldwide, yet very few receive specialized
            care. These numbers explain why dedicated pain management matters.
          </Typography>
        </motion.div>

        {/* Stats */}
        <Grid container spacing={4} justifyContent="center">
          {stats.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{ y: -10 }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    textAlign: "center",
                    backgroundColor: "background.paper",
                    borderRadius: 4,
                    boxShadow: "0px 18px 45px rgba(0,0,0,0.1)",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      boxShadow:
                        "0px 25px 60px rgba(200,58,122,0.25)",
                    },
                  }}
                >
                  {/* NUMBER */}
                  <Typography
                    variant="h2"
                    color="primary"
                    sx={{ fontWeight: 700 }}
                  >
                    {Number.isInteger(item.value)
                      ? Math.round(item.value)
                      : item.value.toFixed(1)}
                    <span style={{ fontSize: "1.5rem" }}>
                      {item.suffix}
                    </span>
                  </Typography>

                  {/* Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.15,
                    }}
                    style={{
                      height: 3,
                      width: 50,
                      margin: "16px auto",
                      background:
                        "linear-gradient(90deg, #C83A7A, #1CB5B0)",
                      borderRadius: 2,
                    }}
                  />

                  {/* Text */}
                  <Typography
                    sx={{
                      whiteSpace: "pre-line",
                      color: "text.secondary",
                      fontSize: 16,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
