import React from "react";
import { Container, TextField, Box, Button, Typography } from "@mui/material";
import Lottie from "lottie-react";
import animation from "./assets/anim.json";
import { useSpeechSynthesis } from "react-speech-kit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { amber } from "@mui/material/colors";

const App = () => {
  const { speak } = useSpeechSynthesis();
  const [data, setData] = React.useState("");
  const greating = "semangat ya hari ini, jangan lupa makan dan istirahat";

  const handleClick = () => {
    speak({ text: `Hallo ${data}, ${greating}` });
    setTimeout(() => {
      setData("");
    }, 7000);
  };

  return (
    <Container>
      <Box sx={{ display: "grid", justifyContent: "center" }}>
        <Lottie animationData={animation} loop={true} />
        <Typography
          sx={{
            mb: 2,
            textAlign: "center",
            fontSize: "35px",
            color: amber[500],
            bgcolor: amber[50],
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
        <Button sx={{ mt: 2 }} onClick={handleClick}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default App;
