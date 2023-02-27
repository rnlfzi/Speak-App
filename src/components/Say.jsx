import React from 'react'
import { Container, TextField, Box, Button, Typography } from "@mui/material";
import Lottie from "lottie-react";
import animation from "../assets/anim.json";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { pink } from "@mui/material/colors";
import Img from "./Img";

const Say = ({ speakUp }) => {
  const [data, setData] = React.useState('');

  const handleClick = () => {
    speakUp(data);
    setTimeout(() => {
      setData('')
    }, 7000)
  }

  return (
    <Container className="responsive" sx={{ height: "100vh" }}>
      <Box
        sx={{
          position: "relative",
          display: "grid",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Lottie animationData={animation} loop={true} />
        <Typography
          sx={{
            mb: 2,
            textAlign: "center",
            fontSize: "35px",
            color: "white",
            fontWeight: "bold",
            borderRadius: "50px",
          }}
        >
          <WbSunnyIcon />
          {"  "}Hai and Hello,
        </Typography>
        <TextField
          label="Isi dengan nama kamu"
          color="secondary"
          fullWidth
          focused
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <Typography sx={{ m: 1, color: "white" }}>
          {data.length > 3 ? "" : "*Setidaknya masukan beberapa kata"}
        </Typography>
        <Button
          variant="contained"
          disableElevation
          sx={{ mb: 5, bgcolor: pink[300], ":hover": { bgcolor: pink[500] } }}
          disabled={data.length >= 3 ? false : true}
          onClick={handleClick}
        >
          Submit
        </Button>
      </Box>
      <Img />
    </Container>
  )
}

export default Say