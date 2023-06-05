import React from "react";
import Helmet from "../common/helmet/Helmet";
import useIsMobile from "../../utils/hooks/useMobile";
function Home() {
  console.log(useIsMobile());
  return (
    <>
      <Helmet title="Home" style={{ fontSize: "50px" }} />
    </>
  );
}

export default Home;
