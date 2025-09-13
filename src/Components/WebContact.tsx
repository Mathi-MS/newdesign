import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { commonWord } from "../assets/CommonWord";
import VerifiedIcon from "@mui/icons-material/Verified";
import { CustomInput } from "../Custom/CustomInput";
import CustomButton from "../Custom/CustomButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { webContactSchema } from "../assets/Validation/Schema";
import { useState } from "react";
export const WebContact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(webContactSchema),
  });
  const [loading, setLoading] = useState(false);
  const onsubmit = (data: {
    name: string;
    email: string;
    message: string;
    mobileNumber: string;
  }) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(data);
      reset();
    }, 5000);
  };
  return (
    <Grid
      container
      sx={{
        py: 4,
        gap: "20px",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "48%" } }}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            background:
              "linear-gradient(135deg, #7f7fff, var(--primary), var(--primary), #7f7fff, #a0c4ff, var(--primary))",
            color: "white",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "18px",
              marginBottom: "15px !important",
            }}
            gutterBottom
          >
            <VerifiedIcon /> Guaranteed response within 24 hours
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "18px",
              marginBottom: "15px !important",
            }}
            gutterBottom
          >
            <VerifiedIcon /> Confidentiality assured: NDA available upon request
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "18px",
              marginBottom: "15px !important",
            }}
            gutterBottom
          >
            <VerifiedIcon /> Direct access to our expert web development
            specialists
          </Typography>

          <Box mt={4}>
            <Typography variant="subtitle1">Project Inquiries</Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <EmailIcon sx={{ marginRight: 1 }} />
              <Link href={`mailto:${commonWord.email}`} color="inherit">
                {commonWord.email}
              </Link>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <CallIcon sx={{ marginRight: 1 }} />
              <Link href={`tel:${commonWord.phone}`} color="inherit">
                Book a call
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box sx={{ width: { xs: "100%", md: "48%" } }}>
        <Paper
          elevation={3}
          sx={{
            padding: { xs: 2, md: 4 },
            borderRadius: 3,
            boxShadow: "none",
            border: "1.2px solid var(--primary)",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontFamily: "Bold_M", fontWeight: "bold" }}
          >
            Tell us about your project
          </Typography>

          <Box
            component="form"
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{ marginTop: 3 }}
            onSubmit={handleSubmit(onsubmit)}
          >
            <CustomInput
              label="Full Name"
              required
              placeholder="Enter your Name"
              type="text"
              name="name"
              register={register}
              errors={errors}
            />
            <Box sx={{ display: "flex", gap: "20px" }}>
              <CustomInput
                label="Email"
                required
                placeholder="Enter your email"
                type="text"
                name="email"
                register={register}
                errors={errors}
                boxSx={{ width: "48%" }}
              />
              <CustomInput
                label="Mobile Number"
                required
                placeholder="Enter your Mobile Number"
                type="number"
                name="mobileNumber"
                register={register}
                errors={errors}
                boxSx={{ width: "48%" }}
              />
            </Box>
            <CustomInput
              label="About Project"
              required
              placeholder="About Project"
              type="textarea"
              name="message"
              register={register}
              errors={errors}
            />

            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: { xs: "start", md: "center" },
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Typography
                variant="caption"
                color="textSecondary"
                sx={{ width: { xs: "100%", sm: "60%" } }}
              >
                By submitting this form you agree to our{" "}
                <Link
                  href="#"
                  underline="hover"
                  sx={{ fontWeight: "bold", color: "var(--primary)" }}
                >
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  underline="hover"
                  sx={{ fontWeight: "bold", color: "var(--primary)" }}
                >
                  Privacy Policy
                </Link>
                .
              </Typography>

              <Box>
                <CustomButton
                  type="submit"
                  variant="contained"
                  size="small"
                  label="Submit"
                  boxSx={{
                    padding: "5px 30px",
                    background: "var(--secondary)",
                    color: "var(--midnight)",
                  }}
                  onClick={handleSubmit(onsubmit)}
                  loading={loading}
                />
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};
