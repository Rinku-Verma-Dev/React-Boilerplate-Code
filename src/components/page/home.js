import React from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./counter";

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
      <div>
        <Counter />
      </div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleAbout}>about</button>
    </>
  );
}

export default Home;
