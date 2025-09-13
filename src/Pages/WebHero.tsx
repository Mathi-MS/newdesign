import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { images } from "../assets/Images/Images"; // Adjust the path as needed

export const WebHero: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "84vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 3, md: 8 },
        py: { xs: 4, md: 8 },
        background:
          "linear-gradient(135deg, #7f7fff, var(--primary), var(--primary), #7f7fff, #a0c4ff, var(--primary))",
        color: "#fff",
        textAlign: { xs: "center", md: "left" },
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left Content */}
      <Box sx={{ display:"flex",flexDirection:"column",justifyContent:{xs:"start !important",md:"start !important"},width:"100%" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            maxWidth: {xs:"unset",md:"700px"},
            mx: { xs: "auto", md: 0 },
            fontSize: { xs: "35px", sm: "40px", md: "50px" },
          }}
        >
          Your Vision. Our Creativity. Exceptional Digital Solutions.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            m: "15px 0px 30px 0px !important",
            maxWidth: {xs:"unset",md:"600px"},
            mx: { xs: "auto", md: 0 },
            fontSize: { xs: "18px", sm: "18px", md: "20px" },
          }}
        >
          We specialize in web, mobile, and graphic design that drives growth
          and captivates your audience. Let’s turn your ideas into visually
          stunning and user-friendly digital products.
        </Typography>

        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "5px",
              backgroundColor: "var(--secondary)",
              color: "var(--midnight)",
              "&:hover": {
                opacity: 0.9,
              },
              px: 4,
              py: 1.2,
              fontWeight: "bold",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box>
        <Box
          component="img"
          src={images.banner}
          alt=""
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: "600px",
            animation: "rotate 150s linear infinite", 
          }}
        ></Box>
        <style>
          {`
            @keyframes rotate {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </Box>
    </Box>
  );
};
