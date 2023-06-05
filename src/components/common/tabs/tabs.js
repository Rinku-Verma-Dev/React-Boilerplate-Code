import React from "react";
import "./style.css";

function Tabs({ name = "Login", Icon, handleClick }) {
  return (
    <div className="tab-wrapper" onClick={() => handleClick?.()}>
      {name}
      {Icon && <Icon />}
    </div>
  );
}

export default Tabs;
