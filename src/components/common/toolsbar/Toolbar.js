import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import "./style.css";

function Toolbar({ data }) {
  const [isSpinning, setIsSpinning] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="close-arrow" onClick={() => handleClickClose()}>
          <KeyboardArrowRightIcon />
        </div>
        {data.map((item) => {
          const { Icon, handleClick } = item;
          return (
            <div className="tool" onClick={() => handleClick()}>
              <Icon />
            </div>
          );
        })}
      </div>
      <div className="icon-wrapper" onClick={() => handleClickOpen()}>
        <SettingsIcon fontSize="large" className={isSpinning} />
      </div>
    </div>
  );
}
export default Toolbar;
