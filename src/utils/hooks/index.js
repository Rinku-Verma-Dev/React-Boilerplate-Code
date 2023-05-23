import { useEffect, useState } from "react";

const useAuth = () => {
  const [isToken, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);

  return isToken;
};

export default useAuth;
