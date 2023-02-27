import { Box, Typography } from "@mui/material";
import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/load.json";
import Footer from "./Footer";
import { grey } from "@mui/material/colors";

const Loader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "#ffff",
      }}
    >
      <Lottie animationData={animation} loop={true} width="250px" />
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", fontFamily: 'Slackey', color: grey[500] }}
        variant="h4"
      >
        Sabar yak...
      </Typography>
      <Footer />
    </Box>
  );
};

export default Loader;
