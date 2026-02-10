import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function Offerings() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        textAlign: "center",
        background:
          "linear-gradient(135deg, rgba(200,58,122,0.06), rgba(28,181,176,0.06))",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft animated glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 30%, rgba(200,58,122,0.12), transparent 60%), radial-gradient(circle at 70% 70%, rgba(28,181,176,0.12), transparent 60%)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" gutterBottom fontWeight={700}>
            Our Promise
          </Typography>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            height: 4,
            width: 80,
            margin: "20px auto",
            background: "linear-gradient(90deg, #C83A7A, #1CB5B0)",
            borderRadius: 4,
          }}
        />

        {/* Promise Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4 }}
          >
            {[
              "Ethical Treatment",
              "Evidence-Based Care",
              "Faster Recovery",
            ].map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  px: 3,
                  py: 1.5,
                  borderRadius: 30,
                  background:"#E06AA0",
                  color: "#fff",
                  boxShadow:
                    "0 10px 28px rgba(200,58,122,0.35)",
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </motion.div>
      </Box>
    </Box>
  );
}
