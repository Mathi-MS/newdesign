import { Box, Grid, Link, Typography } from "@mui/material";
import { commonWord } from "../assets/CommonWord";

export const WebFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(135deg, #7f7fff, var(--primary), var(--primary), #7f7fff, #7f7fff, var(--primary))",
        color: "white",
        padding: { xs: "30px 10px", sm: "30px 25px", md: "40px 30px" },
      }}
    >
      <Grid container justifyContent="space-between">
        <Box
          sx={{
            fontSize: { xs: "3rem", sm: "6rem", md: "8rem" },
            fontWeight: "bold",
            textAlign: { xs: "center", md: "left" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          Digital Desi<span className="stokefooter">gn</span>
        </Box>
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "center" },
          mt: 4,
          gap: 3,
        }}
      >
        <Box>
          <Box
            display="flex"
            flexDirection={{ xs: "row", sm: "row" }}
            flexWrap="wrap"
            gap={2}
            justifyContent={{ xs: "center", sm: "center" }}
            textAlign={{ xs: "center", sm: "left" }}
          >
            <Link href="#" underline="none" color="inherit">
              About
            </Link>
            <Link href="#" underline="none" color="inherit">
              Services
            </Link>
            <Link href="#" underline="none" color="inherit">
              Coaches
            </Link>
            <Link href="#" underline="none" color="inherit">
              Events
            </Link>
            <Link href="#" underline="none" color="inherit">
              Membership
            </Link>
          </Box>
        </Box>

        <Box textAlign={{ xs: "center", md: "right" }}>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>{commonWord.contactInfo.addressLine1}</Typography>
            <Typography>{commonWord.contactInfo.addressLine2}</Typography>
            <Typography>{commonWord.contactInfo.openingHours}</Typography>

            <Link href={`tel:${commonWord.phone}`} color="inherit">
              {commonWord.phone}
            </Link>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        mt={6}
        gap={2}
      >
        <Typography variant="body2" textAlign={{ xs: "center", sm: "left" }}>
          © {new Date().getFullYear()} Copyright
        </Typography>
        <Link href="#" color="inherit" underline="none">
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
};
