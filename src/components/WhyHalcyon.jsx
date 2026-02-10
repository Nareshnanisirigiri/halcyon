// import { Box, Grid, Typography, Button } from "@mui/material";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// export default function WhyHalcyon() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-120px" });

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         py: { xs: 10, md: 14 },
//         px: { xs: 2, md: 6 },
//         backgroundColor: "background.default",
//         overflow: "hidden",
//       }}
//     >
//       <Grid container spacing={6} alignItems="center">

//         {/* LEFT CONTENT */}
//         <Grid item xs={12} md={6}>
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//           >
//             <Typography variant="h3" gutterBottom fontWeight={700}>
//               Why <span style={{ color: "#C83A7A" }}>Halcyon</span>?
//             </Typography>

//             <Typography
//               sx={{
//                 mt: 2,
//                 mb: 3,
//                 fontSize: 17,
//                 color: "text.secondary",
//                 lineHeight: 1.8,
//                 maxWidth: 520,
//               }}
//             >
//               At Halcyon Pain Management, we believe pain should never define
//               your life. Our approach focuses on identifying the root cause of
//               pain and delivering personalized, evidence-based treatments
//               designed for long-term relief.
//             </Typography>

//             <Typography
//               sx={{
//                 mb: 3,
//                 fontSize: 17,
//                 color: "text.secondary",
//                 lineHeight: 1.8,
//                 maxWidth: 520,
//               }}
//             >
//               We combine advanced pain interventions, ethical medical practice,
//               and compassionate care to help patients regain mobility, comfort,
//               and confidence — without unnecessary surgery.
//             </Typography>

//             <Box sx={{ mt: 4 }}>
//               {[
//                 "Root-cause focused treatment",
//                 "Advanced pain interventions",
//                 "Non-surgical pain solutions",
//                 "Ethical, patient-first care",
//               ].map((point, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 0.3 + i * 0.15 }}
//                 >
//                   <Typography sx={{ mb: 1.5, fontSize: 16, fontWeight: 500 }}>
//                     ✓ {point}
//                   </Typography>
//                 </motion.div>
//               ))}
//             </Box>

//             <Button variant="contained" size="large" sx={{ mt: 4 }}>
//               Learn More About Our Approach
//             </Button>
//           </motion.div>
//         </Grid>

//         {/* RIGHT VIDEO */}
//         <Grid item xs={12} md={6}>
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//           >
//             <Box
//               sx={{
//                 width: "700px",
//                 maxWidth: 1220,
//                 height: 520,
//                 borderRadius: 5,
//                 overflow: "hidden",
//                 boxShadow: "0px 20px 50px rgba(0,0,0,0.15)",
//                 mx: { xs: "auto", md: 0 },
//               }}
//             >
//               <video
//                 src="/images/about_video.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 style={{
//                   width: "100%",
//                   height: "800px",
//                   objectFit: "cover",
//                 }}
//               />
//             </Box>
//           </motion.div>
//         </Grid>

//       </Grid>
//     </Box>
//   );
// }




import { Box, Grid, Typography, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyHalcyon() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 14 },
        px: { xs: 2, md: 6 },
        backgroundColor: "background.default",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* LEFT CONTENT */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Typography variant="h3" gutterBottom fontWeight={700}>
              Why <span style={{ color: "#C83A7A" }}>Halcyon</span>?
            </Typography>

            <Typography
              sx={{
                mt: 2,
                mb: 3,
                fontSize: 17,
                color: "text.secondary",
                lineHeight: 1.8,
                maxWidth: 520,
              }}
            >
              At Halcyon Pain Management, we believe pain should never define
              your life. Our approach focuses on identifying the root cause of
              pain and delivering personalized, evidence-based treatments
              designed for long-term relief.
            </Typography>

            <Typography
              sx={{
                mb: 3,
                fontSize: 17,
                color: "text.secondary",
                lineHeight: 1.8,
                maxWidth: 500,
              }}
            >
              We combine advanced pain interventions, ethical medical practice,
              and compassionate care to help patients regain mobility, comfort,
              and confidence — without unnecessary surgery.
            </Typography>

            <Box sx={{ mt: 4 }}>
              {[
                "Root-cause focused treatment",
                "Advanced pain interventions",
                "Non-surgical pain solutions",
                "Ethical, patient-first care",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                >
                  <Typography sx={{ mb: 1.5, fontSize: 16, fontWeight: 500 }}>
                    ✓ {point}
                  </Typography>
                </motion.div>
              ))}
            </Box>

            <Button variant="contained" size="large" sx={{ mt: 4 }}>
              Learn More About Our Approach
            </Button>
          </motion.div>
        </Grid>

        {/* RIGHT VIDEO – RESPONSIVE */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 650,
                aspectRatio: "16 / 9",
                borderRadius: 5,
                overflow: "hidden",
                boxShadow: "0px 20px 50px rgba(0,0,0,0.15)",
                mx: "auto",
              }}
            >
              <video
                src="/images/about_video.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
