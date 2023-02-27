import React from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";

const App = () => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  return (
    <Routes>
      <Route path="/" element={ loading ? <Loader /> : <HomePage />} />
    </Routes>
  );
};

export default App;
