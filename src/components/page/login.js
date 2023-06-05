import axios from "axios";
import React, { useCallback } from "react";

function Login() {
  const handleLogin = useCallback(async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACK_END_URL}login`,
        {
          email: "rinku.verma@unthinkable.co",
          password: "1234@",
        }
      );
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <div>Login</div>
      <button onClick={() => handleLogin()}>Submit</button>
    </>
  );
}

export default Login;
