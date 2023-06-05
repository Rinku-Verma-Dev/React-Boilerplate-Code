import React from "react";
import { useNavigate } from "react-router";

import HomeIcon from "@mui/icons-material/Home";
import AndroidIcon from "@mui/icons-material/Android";
import PersonPinIcon from "@mui/icons-material/PersonPin";

import "./style.css";
import Toolbar from "../../common/toolsbar/Toolbar";
import NavBar from "../../common/navbar/NavBar";
import useIsMobile from "../../../utils/hooks/useMobile";

function MainLayout({ children }) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const handleAbout = () => {
    navigate("/about");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleRedux = () => {
    navigate("/redux");
  };

  const data = [
    {
      name: "Home",
      Icon: HomeIcon,
      handleClick: handleHome,
    },
    {
      name: "Redux",
      Icon: AndroidIcon,
      handleClick: handleRedux,
    },
    {
      name: "Profile",
      Icon: PersonPinIcon,
      handleClick: handleAbout,
    },
  ];
  return (
    <div className="main-layout-wrapper">
      {isMobile ? <Toolbar data={data} /> : <NavBar data={data} />}
      <div className="layout-wrapper">
        {/* <div className="header-wrapped">
          <Toolbar data={data} />
        </div> */}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
