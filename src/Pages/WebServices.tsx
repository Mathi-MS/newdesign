import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Typography,
  Stack,
  Chip,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { images } from "../assets/Images/Images";

export const WebServices = () => {
  const [expanded, setExpanded] = useState<string | false>("web");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const sections = [
    {
      id: "web",
      title: "Web Development",
      description:
        "We build blazing-fast, SEO-optimized, responsive websites using React, Next.js, and Node.js. From marketing pages to complex dashboards, we deliver scalable web apps.",
      tags: ["Responsive Design", "SEO Optimization", "CMS Integration"],
      colors: {
        headerBg: "#1e88e5",
        headerHoverBg: "#1565c0",
        contentBg: "linear-gradient(135deg, #64b5f6 0%, #bbdefb 100%)",
        chipBg: "#1565c0",
      },
    },
    {
      id: "mobile",
      title: "Mobile Development",
      description:
        "Native-like mobile apps built with Flutter and React Native to launch your business idea quickly on both iOS and Android platforms.",
      tags: ["Flutter", "React Native", "iOS & Android", "Cross-Platform"],
      colors: {
        headerBg: "#fb8c00",
        headerHoverBg: "#ef6c00",
        contentBg: "linear-gradient(135deg, #ffb74d 0%, #ffe0b2 100%)",
        chipBg: "#ef6c00",
      },
    },
    {
      id: "design",
      title: "Graphic Design",
      description:
        "Creative and strategic graphic design services, from branding to marketing visuals, that make your business truly stand out.",
      tags: ["Logo Design", "Social Media Kits", "UI/UX", "Brand Identity"],
      colors: {
        headerBg: "#8e24aa",
        headerHoverBg: "#6a1b9a",
        contentBg: "linear-gradient(135deg, #ba68c8 0%, #e1bee7 100%)",
        chipBg: "#6a1b9a",
      },
    },
  ];

  return (
    <Box
      sx={{
        background: "var(--softGrey)",
        borderRadius: 3,
        p: { xs: "32px 10px", sm: 5 },
      }}
    >
      <Grid
        container
        sx={{
          gap: 4,
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        {/* Left: Accordion */}
        <Box sx={{ width: { xs: "100%", md: "55%" } }}>
          <Stack spacing={3}>
            {sections.map(({ id, title, description, tags, colors }) => (
              <Accordion
                key={id}
                expanded={expanded === id}
                onChange={handleChange(id)}
                disableGutters
                square
                sx={{
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === id ? (
                      <RemoveIcon
                        sx={{
                          fontSize: 26,
                          color: "white",
                          borderRadius: "50%",
                          p: 0.2,
                        }}
                      />
                    ) : (
                      <AddIcon
                        sx={{
                          fontSize: 26,
                          color: "var(--primary)",
                          borderRadius: "50%",
                          p: 0.2,
                        }}
                      />
                    )
                  }
                  sx={{
                    backgroundColor:
                      expanded === id ? "var(--primary)" : "#f5f5f5",
                    color: expanded === id ? "white" : "rgba(0,0,0,0.87)",
                    fontWeight: "bold",
                    fontSize: 18,
                    px: 4,
                    py: 2.5,
                    "&:hover": {
                      backgroundColor:
                        expanded === id ? "var(--primary)" : "rgba(0,0,0,0.04)",
                      cursor: "pointer",
                    },
                    transition: "background-color 0.3s",
                    userSelect: "none",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
                    <Box
                      sx={{
                        width: "100px",
                        background:
                          expanded === id
                            ? "var(--primary)"
                            : "linear-gradient(135deg, #7f7fff, var(--primary), var(--primary), #7f7fff, #a0c4ff, var(--primary))",
                        height: "20px",
                        borderRadius: "100px",
                        marginTop: "5px",
                      }}
                    ></Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    background: "var(--primary)",
                    px: 4,
                    pb: 4,
                    pt: 2,
                    color: "var(--white)",
                    fontSize: 16,
                  }}
                >
                  <Typography mb={2}>{description}</Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    sx={{ mt: 2, gap: 1 }}
                  >
                    {tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        sx={{
                          backgroundColor: "var(--secondary)",
                          color: "var(--midnight)",
                          fontWeight: 600,
                          fontSize: 14,
                          py: 0.5,
                          px: 1.5,
                          borderRadius: 1.5,
                          width: { xs: "100%", md: "fit-content" },
                          margin: "0px !important",
                        }}
                      />
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Box>

        {/* Right: Description */}
        <Box sx={{ width: { xs: "100%", md: "35%" } }}>
          <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "20px",
                px: 5,
                py: 0.8,
                color: "var(--primary)",
                borderColor: "var(--primary)",
                mb: { xs: 2, md: 2 },
              }}
            >
              Our Expertise
            </Button>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, mt: 2 }}>
              Powering Your Vision with Expert Digital Services
            </Typography>
            <Typography variant="body1" color="text.secondary">
              From custom web development to mobile applications and UI/UX
              design, our services are built to accelerate your business in the
              digital age. We don’t just deliver solutions — we craft seamless
              experiences that drive results and build lasting value.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Box
                component={"img"}
                src={images.glassyservices}
                alt="glassyservices"
                sx={{
                  height: { xs: "150px", md: "200px" },
                //   rotate: "180deg",
                  animation: "gentleShake 20s ease-in-out infinite",
                  "@keyframes gentleShake": {
                    "0%": {
                      transform: "translateY(0) translateX(0) rotate(180deg)",
                    },
                    "50%": {
                      transform: "translateY(-8px) translateX(0px) rotate(220deg)",
                    },
                    "100%": {
                      transform: "translateY(0) translateX(0) rotate(180deg)",
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
