import { Box } from "@mui/material";
import { WebAbout } from "../Pages/WebAbout";
import { WebHero } from "../Pages/WebHero";
import { WebHeader } from "./WebHeader";
import { WebServices } from "../Pages/WebServices";

export const WebMain = () => {
  return (
    <>
      <WebHeader />
      <Box sx={{ margin: { xs: "15px", sm: "25px", md: "30px" },marginTop:"0px !important" }}>
        <WebHero />
        <WebAbout />
        <WebServices />
      </Box>
    </>
  );
};
