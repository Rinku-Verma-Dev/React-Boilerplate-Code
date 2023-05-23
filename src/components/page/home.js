import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  return (
    <>
      <div>Home</div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleAbout}>about</button>
    </>
  );
}

export default Home;
