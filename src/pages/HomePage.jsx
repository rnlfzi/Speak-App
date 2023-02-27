import React from 'react'
import Say from '../components/Say'
import { useSpeechSynthesis } from "react-speech-kit";

const HomePage = () => {
  const { speak } = useSpeechSynthesis();
  const greating = "semangat ya hari ini, jangan lupa makan dan istirahat";

  const speakUp = (name) => {
    speak({ text: `Hallo ${name}, ${greating}` });
  }
  
  return (
    <>
      <Say speakUp={speakUp}/>
    </>
  )
}

export default HomePage