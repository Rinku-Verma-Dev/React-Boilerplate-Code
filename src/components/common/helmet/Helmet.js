import React from "react";

function Helmet({ title = "", style = {}, ...rest }) {
  return (
    <h1 style={style} {...rest}>
      {title}
    </h1>
  );
}

export default Helmet;
