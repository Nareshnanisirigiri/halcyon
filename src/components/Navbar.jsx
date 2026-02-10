import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const menuItems = ["Home", "Services", "Symptoms", "Our Offerings"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0.9)",
        backdropFilter: "blur(14px)",
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        {/* LOGO */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src="/images/logo.halcyon.webp"
            alt="Halcyon"
            style={{ height: 40 }}
          />
         
        </Box>

        {/* MENU */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {menuItems.map((item) => (
            <Box
              key={item}
              component={motion.div}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 260 }}
              onClick={() => setActive(item)}
              sx={{
                mx: 2.2,
                cursor: "pointer",
                position: "relative",
                fontWeight: 600,
                fontSize: "1.05rem",
                letterSpacing: "0.4px",
                color:
                  active === item ? "primary.main" : "text.primary",
              }}
            >
              {item}

              {/* ACTIVE UNDERLINE */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: -10,
                  transform: "translateX(-50%)",
                  width: active === item ? "110%" : "0%",
                  height: 4,
                  borderRadius: 3,
                  background:
                    "linear-gradient(90deg, #C83A7A, #1CB5B0)",
                  transition: "width 0.35s ease",
                }}
              />

              {/* HOVER UNDERLINE */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: -10,
                  transform: "translateX(-50%)",
                  width: "0%",
                  height: 4,
                  borderRadius: 3,
                  background:
                    "linear-gradient(90deg, #C83A7A, #1CB5B0)",
                  transition: "width 0.35s ease",
                  "&:hover": {
                    width: "110%",
                  },
                }}
              />
            </Box>
          ))}

          {/* CTA BUTTON */}
          <Button
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              ml: 3,
              px: 4,
              py: 1.4,
              borderRadius: 30,
              fontWeight: 600,
              fontSize: "1rem",
              letterSpacing: "0.8px",
              background:
                "linear-gradient(135deg, #C83A7A, #1CB5B0)",
              color: "#fff",
              boxShadow: "0 10px 28px rgba(200,58,122,0.45)",
              "&:hover": {
                boxShadow:
                  "0 14px 34px rgba(28,181,176,0.55)",
              },
            }}
          >
            BOOK NOW 
          </Button>
        </Box>

        {/* MOBILE ICON */}
        <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
