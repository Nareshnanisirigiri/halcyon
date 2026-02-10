// import { Box, Typography, Button, Grid, Paper } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Hero() {
//   const therapyImages = [
//     "radiofrequency-ablation",
//     "prolotherapy",
//     "regenerative-medicine",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % therapyImages.length);
//     }, 3000); // change image every 3s

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         overflow: "hidden",
//         px: { xs: 2, md: 6 },
//         background:
//           "linear-gradient(135deg, rgba(11,94,215,0.05), rgba(124,179,66,0.08))",
//       }}
//     >
//       <Grid container spacing={6} alignItems="center">

//         {/* LEFT CONTENT */}
//         <Grid item xs={12} md={4}>
//           <motion.div
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             <Typography variant="h4" gutterBottom>
//               Welcome To <br />
//               <span style={{ color: "#C2185B" }}>
//                 Halcyon Pain Management
//               </span>
//             </Typography>

//             <Typography
//               sx={{
//                 mb: 3,
//                 color: "text.secondary",
//                 fontSize: 18,
//                 maxWidth: 420,
//               }}
//             >
//               Advanced, evidence-based pain relief solutions helping you move
//               better, live stronger, and reclaim a pain-free life.
//             </Typography>

//             <Typography variant="h5" color="secondary" sx={{ mb: 3 }}>
//               ⭐⭐⭐⭐⭐ <br />
//               Trusted by 50,000+ Patients
//             </Typography>

//             <Button size="large" variant="contained">
//               Book Your Consultation
//             </Button>
//           </motion.div>
//         </Grid>

//         {/* CENTER FLOATING IMAGE */}
//         <Grid item xs={12} md={4} sx={{ textAlign: "center", mt: 5 }}>
//           <motion.div
//             animate={{ y: [0, -18, 0] }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <Paper
//               elevation={16}
//               sx={{
//                 p: 2,
//                 borderRadius: 5,
//                 display: "inline-block",
//                 transform: "rotate(-2deg)",
//               }}
//             >
//               <img
//                 src="/images/dr-pallavi-dasyam.jpg"
//                 alt="Dr Pallavi Dasyam"
//                 style={{
//                   width: "100%",
//                   maxWidth: 360,
//                   borderRadius: 18,
//                 }}
//               />
//             </Paper>

//             <Typography sx={{ mt: 2, fontWeight: 600 }}>
//               Dr. Pallavi Dasyam
//             </Typography>
//             <Typography variant="caption" color="text.secondary">
//               Consultant – Pain Medicine
//             </Typography>
//           </motion.div>
//         </Grid>

//         {/* RIGHT ONE-BY-ONE IMAGE SLIDER */}
//         <Grid item xs={12} md={4}>
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             <Typography variant="h4" color="secondary" gutterBottom>
//               Your Path To Recovery <br /> Starts Here
//             </Typography>

//             <Box
//               sx={{
//                 mt: 3,
//                 width: 280,
//                 height: 180,
//                 position: "relative",
//                 overflow: "hidden",
//                 borderRadius: 3,
//               }}
//             >
//               <AnimatePresence mode="wait">
//                 <motion.img
//                   key={currentIndex}
//                   src={`/images/${therapyImages[currentIndex]}.jpg`}
//                   alt="Pain Therapy"
//                   initial={{ x: 80, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: -80, opacity: 0 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     position: "absolute",
//                   }}
//                 />
//               </AnimatePresence>
//             </Box>
//           </motion.div>
//         </Grid>

//       </Grid>
//     </Box>
//   );
// }



import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ✅ Move static data OUTSIDE the component */
const therapyImages = [
  "radiofrequency-ablation",
  "prolotherapy",
  "regenerative-medicine",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % therapyImages.length);
    }, 3000); // change image every 3s

    return () => clearInterval(interval);
  }, []); // ✅ ESLint-safe now

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        px: { xs: 2, md: 6 },
        background:
          "linear-gradient(135deg, rgba(11,94,215,0.05), rgba(124,179,66,0.08))",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* LEFT CONTENT */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography variant="h4" gutterBottom>
              Welcome To <br />
              <span style={{ color: "#C2185B" }}>
                Halcyon Pain Management
              </span>
            </Typography>

            <Typography
              sx={{
                mb: 3,
                color: "text.secondary",
                fontSize: 18,
                maxWidth: 420,
              }}
            >
              Advanced, evidence-based pain relief solutions helping you move
              better, live stronger, and reclaim a pain-free life.
            </Typography>

            <Typography variant="h5" color="secondary" sx={{ mb: 3 }}>
              ⭐⭐⭐⭐⭐ <br />
              Trusted by 50,000+ Patients
            </Typography>

            <Button size="large" variant="contained">
              Book Your Consultation
            </Button>
          </motion.div>
        </Grid>

        {/* CENTER IMAGE */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center", mt: 5 }}>
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Paper
              elevation={16}
              sx={{
                p: 2,
                borderRadius: 5,
                display: "inline-block",
                transform: "rotate(-2deg)",
              }}
            >
              <img
                src="/images/dr-pallavi-dasyam.jpg"
                alt="Dr Pallavi Dasyam"
                style={{
                  width: "100%",
                  maxWidth: 360,
                  borderRadius: 18,
                }}
              />
            </Paper>

            <Typography sx={{ mt: 2, fontWeight: 600 }}>
              Dr. Pallavi Dasyam
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Consultant – Pain Medicine
            </Typography>
          </motion.div>
        </Grid>

        {/* RIGHT IMAGE SLIDER */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography variant="h4" color="secondary" gutterBottom>
              Your Path To Recovery <br /> Starts Here
            </Typography>

            <Box
              sx={{
                mt: 3,
                width: 280,
                height: 180,
                position: "relative",
                overflow: "hidden",
                borderRadius: 3,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={`/images/${therapyImages[currentIndex]}.jpg`}
                  alt="Pain Therapy"
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                  }}
                />
              </AnimatePresence>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
