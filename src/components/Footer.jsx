// import { Box, Typography, Grid, Stack, IconButton } from "@mui/material";
// import { motion } from "framer-motion";

// // Icons
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// export default function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         position: "relative",
//         overflow: "hidden",
//         background:
//           "linear-gradient(135deg, #C83A7A, #1CB5B0)",
//         color: "#fff",
//         pt: { xs: 8, md: 10 },
//         pb: 4,
//       }}
//     >
//       {/* Animated background glow */}
//       <motion.div
//         animate={{ opacity: [0.25, 0.4, 0.25] }}
//         transition={{ duration: 6, repeat: Infinity }}
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.12), transparent 60%)",
//           zIndex: 0,
//         }}
//       />

//       {/* Content */}
//       <Box sx={{ position: "relative", zIndex: 1, px: { xs: 2, md: 6 } }}>
//         <Grid container spacing={6}>
//           {/* ABOUT */}
//           <Grid item xs={12} md={4}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <Typography variant="h5" fontWeight={700} gutterBottom>
//                 Halcyon Pain Management
//               </Typography>

//               <Typography sx={{ opacity: 0.9, lineHeight: 1.7 }}>
//                 Dedicated to ethical, evidence-based pain management.
//                 Our mission is to help patients move better, live
//                 stronger, and reclaim a pain-free life.
//               </Typography>
//             </motion.div>
//           </Grid>

//           {/* QUICK LINKS */}
//           <Grid item xs={12} md={4}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.15 }}
//             >
//               <Typography variant="h6" fontWeight={700} gutterBottom>
//                 Quick Links
//               </Typography>

//               <Stack spacing={1.2}>
//                 {[
//                   "Home",
//                   "Services",
//                   "Symptoms",
//                   "Our Offerings",
//                   "Contact",
//                 ].map((link) => (
//                   <Typography
//                     key={link}
//                     component={motion.p}
//                     whileHover={{ x: 6 }}
//                     sx={{
//                       cursor: "pointer",
//                       opacity: 0.9,
//                       "&:hover": {
//                         opacity: 1,
//                         textDecoration: "underline",
//                       },
//                     }}
//                   >
//                     {link}
//                   </Typography>
//                 ))}
//               </Stack>
//             </motion.div>
//           </Grid>

//           {/* CONTACT */}
//           <Grid item xs={12} md={4}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <Typography variant="h6" fontWeight={700} gutterBottom>
//                 Contact Us
//               </Typography>

//               <Stack spacing={1.5}>
//                 <Typography sx={{ display: "flex", gap: 1 }}>
//                   <PhoneIcon /> +91 98765 43210
//                 </Typography>
//                 <Typography sx={{ display: "flex", gap: 1 }}>
//                   <EmailIcon /> info@halcyonpainfree.com
//                 </Typography>
//                 <Typography sx={{ display: "flex", gap: 1 }}>
//                   <LocationOnIcon />
//                   Hyderabad, Telangana, India
//                 </Typography>
//               </Stack>

//               {/* SOCIAL */}
//               <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
//                 {[FacebookIcon, InstagramIcon, LinkedInIcon].map(
//                   (Icon, i) => (
//                     <IconButton
//                       key={i}
//                       component={motion.button}
//                       whileHover={{ scale: 1.2, rotate: 6 }}
//                       sx={{
//                         color: "#fff",
//                         backgroundColor: "rgba(255,255,255,0.15)",
//                         "&:hover": {
//                           backgroundColor:
//                             "rgba(255,255,255,0.25)",
//                         },
//                       }}
//                     >
//                       <Icon />
//                     </IconButton>
//                   )
//                 )}
//               </Stack>
//             </motion.div>
//           </Grid>
//         </Grid>

//         {/* Divider */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           style={{
//             height: 1,
//             background: "rgba(255,255,255,0.3)",
//             margin: "50px 0 20px",
//           }}
//         />

//         {/* COPYRIGHT */}
//         <Typography align="center" sx={{ opacity: 0.9 }}>
//           © {new Date().getFullYear()} Halcyon Pain Management. All
//           Rights Reserved.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }





import {
  Box,
  Typography,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";

// Icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const treatments = [
  "Knee Pain",
  "Hip Pain",
  "Neck Pain",
  "Shoulder Pain",
  "Sports Injuries Pain",
  "Sciatica",
  "Trigeminal Neuralgia",
  "Low Back Pain",
  "Elbow, Hand, and Wrist",
  "Slipped Disc",
  "Foot & Ankle",
  "Cervical Spondylosis",
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #C83A7A, #1CB5B0)",
        color: "#fff",
        pt: { xs: 8, md: 10 },
        pb: 4,
      }}
    >
      {/* Animated glow */}
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.12), transparent 60%)",
          zIndex: 0,
        }}
      />

      {/* CONTENT */}
      <Box sx={{ position: "relative", zIndex: 1, px: { xs: 2, md: 6 } }}>
        <Grid container spacing={6}>
          {/* ABOUT */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Halcyon Pain Management
              </Typography>
              <Typography sx={{ opacity: 0.9, lineHeight: 1.7 }}>
                Ethical, evidence-based pain management helping
                patients move better, live stronger, and
                regain a pain-free life.
              </Typography>
            </motion.div>
          </Grid>

          {/* TREATMENTS */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Treatments
              </Typography>

              <Grid container spacing={1}>
                {treatments.map((item) => (
                  <Grid item xs={6} key={item}>
                    <Typography
                      component={motion.div}
                      whileHover={{ x: 6 }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                        cursor: "pointer",
                        opacity: 0.9,
                        fontSize: 14,
                        "&:hover": {
                          opacity: 1,
                          textDecoration: "underline",
                        },
                      }}
                    >
                      <ArrowOutwardIcon sx={{ fontSize: 14 }} />
                      {item}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          {/* CONTACT */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Contact Us
              </Typography>

              <Stack spacing={1.4}>
                <Typography sx={{ display: "flex", gap: 1 }}>
                  <PhoneIcon fontSize="small" /> +91 98765 43210
                </Typography>
                <Typography sx={{ display: "flex", gap: 1 }}>
                  <EmailIcon fontSize="small" /> info@halcyonpainfree.com
                </Typography>
                <Typography sx={{ display: "flex", gap: 1 }}>
                  <LocationOnIcon fontSize="small" />
                  Hyderabad, Telangana
                </Typography>
              </Stack>
            </motion.div>
          </Grid>

          {/* SOCIAL */}
          <Grid item xs={12} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Follow Us
              </Typography>

              <Stack direction="row" spacing={2}>
                {[FacebookIcon, InstagramIcon, LinkedInIcon].map(
                  (Icon, i) => (
                    <IconButton
                      key={i}
                      component={motion.button}
                      whileHover={{ scale: 1.2, rotate: 6 }}
                      sx={{
                        color: "#fff",
                        backgroundColor:
                          "rgba(255,255,255,0.15)",
                        "&:hover": {
                          backgroundColor:
                            "rgba(255,255,255,0.25)",
                        },
                      }}
                    >
                      <Icon />
                    </IconButton>
                  )
                )}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        {/* DIVIDER */}
        <Box
          sx={{
            height: 1,
            background: "rgba(255,255,255,0.3)",
            my: 5,
          }}
        />

        {/* COPYRIGHT */}
        <Typography align="center" sx={{ opacity: 0.9 }}>
          © {new Date().getFullYear()} Halcyon Pain Management.
          All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
