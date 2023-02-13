import React from "react";
import { Container, TextField, Box, Button } from "@mui/material";
import Lottie from "lottie-react";
import animation from "./assets/anim.json";
import { useSpeechSynthesis } from "react-speech-kit";

const App = () => {
  const { speak } = useSpeechSynthesis();
  const [data, setData] = React.useState("");
  const greating = 'semangat ya hari ini, jangan lupa makan dan istirahat'

  const handleClick = () => {
    speak({ text: `Hallo ${data}, ${greating}`})
    setTimeout(() => {
      setData('')
    }, 7000)
  };
  
  return (
    <Container>
      <Box>
        <Lottie animationData={animation} loop={true} />
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
