import React, { useState } from "react";
import { useNavigate } from "react-router";

import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

import "./style.css";

function Toolbar({ data }) {
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleLogin = () => {
    navigate("/login");
  };
  const handleClickOpen = () => {
    setIsSpinning("spin-open");
    setIsOpen(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000);
  };
  const handleClickClose = () => {
    setIsSpinning("spin-close");
    setIsOpen((prev) => !prev);
    setTimeout(() => {
      setIsSpinning("");
    }, 2000);
  };

  return (
    <div className="toolbar-wrapper">
      <div className={`tools ${isOpen ? "open" : ""}`}>
        {data.map((item, i) => {
          const { Icon, handleClick } = item;
          return (
            <div key={i} className="tool" onClick={() => handleClick()}>
              <Icon />
              {window.innerWidth >= 768 ? item.name : null}
            </div>
          );
        })}
        <div key={data.length} className="tool" onClick={() => handleLogin()}>
          <LogoutIcon />
          {window.innerWidth >= 768 ? "Login" : null}
        </div>
      </div>
      <div
        className="icon-wrapper"
        onClick={() => (isOpen ? handleClickClose() : handleClickOpen())}
      >
        <SettingsIcon fontSize="large" className={isSpinning} />
      </div>
    </div>
  );
}
export default Toolbar;
