import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";

import Tabs from "../../common/tabs/tabs";

import "./style.css";
import { useNavigate } from "react-router";
import useIsMobile from "../../../utils/hooks/useMobile";

function NavBar({ data = [], title = "DashBoard" }) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="navbar-wrapper">
        {!isMobile && (
          <div>
            <h3>{title}</h3>
          </div>
        )}
        {data.map((item, index) => {
          const { name, Icon, handleClick } = item;
          return (
            <React.Fragment key={index}>
              <Tabs name={name} Icon={Icon} handleClick={handleClick} />
            </React.Fragment>
          );
        })}

        <div className="logout-wrapper" onClick={() => handleLogin?.()}>
          {`Login`}
          <LogoutIcon />
        </div>
      </div>
    </>
  );
}

export default NavBar;
