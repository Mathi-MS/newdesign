import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { commonWord } from "../assets/CommonWord";

export const WebAbout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      {/* Top Section */}
      <Box
        sx={{
          mb: 6,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "space-between",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: "20px",
            px: 3,
            py: 1,
            color: "var(--primary)",
            borderColor: "var(--primary)",
            mb: { xs: 2, md: 0 },
          }}
        >
          About Our Company
        </Button>
        <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            At {commonWord.title}, we don’t just build apps — we create
            experiences.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Since 2015, our web development, mobile app creation, and graphic
            design services have helped businesses thrive in the digital world,
            connecting them with their audiences through innovation and
            creativity.
          </Typography>
        </Box>
      </Box>

      {/* Middle Section with Mission, Vision, Goal */}
      <Box sx={{ display: "flex", justifyContent: "space-between",gap:"20px",flexDirection:{xs:"column",md:"row"} }}>
        {/* Mission */}
        <Box sx={{width:"100%"}}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              p: 1,
              bgcolor: "var(--secondary)",
            }}
          >
            <CardContent sx={{ color: "var(--midnight)" }}>
              <FlagIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1,fontSize:'1.6rem' }}>
                Mission
              </Typography>
              <Typography variant="body1">
                Our mission is to deliver cutting-edge web and mobile solutions
                that empower businesses to innovate, grow, and stay ahead in a
                fast-paced digital landscape.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Vision */}
        <Box sx={{width:"100%"}}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              p: 1,
              bgcolor: "var(--primary)",
            }}
          >
            <CardContent sx={{ color: "var(--white)" }}>
              <VisibilityIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1,fontSize:'1.6rem'  }}>
                Vision
              </Typography>
              <Typography variant="body1">
                We envision a world where technology seamlessly integrates into
                everyday life, offering intuitive and aesthetic solutions that
                drive business success.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Goal */}
        <Box sx={{width:"100%"}}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              p: 1,
              background:
                "linear-gradient(135deg, #7f7fff, var(--primary), var(--primary), #7f7fff, #a0c4ff, var(--primary))",
            }}
          >
            <CardContent sx={{ color: "#fff" }}>
              <TrendingUpIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1,fontSize:'1.6rem'  }}>
                Goal
              </Typography>
              <Typography variant="body1">
                Our goal is to foster growth and efficiency by providing
                scalable digital solutions, helping clients achieve measurable
                results and long-term sustainability.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",mt: 3,flexDirection:{xs:"column",md:"row"},gap:"20px"}}>
              {/* Bottom Stats */}
      <Box sx={{ textAlign: "center", }}>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A few more facts about us in numbers
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Box >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              8+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Years of Experience
            </Typography>
          </Box>
          <Box >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              98%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Client Satisfaction
            </Typography>
          </Box>
        </Grid>
      </Box>

      {/* Learn More Button */}
      <Box sx={{ textAlign: "center",  }}>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: "20px",
            backgroundColor: "var(--primary)",
            color: "#fff",
            px: 5,
            py: 1.5,
            transition: "0.3s",
            "&:hover": {
              opacity: 0.9,
            },
          }}
          onClick={() => navigate("/about-us")}
        >
          Learn More About Us
        </Button>
      </Box>
      </Box>
    </Box>
  );
};
