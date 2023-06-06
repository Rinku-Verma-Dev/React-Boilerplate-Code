import { useEffect, useState } from "react";

function useIsMobile() {
  const [deviceType, setDeviceType] = useState(true);

  useEffect(() => {
    function handleResize() {
      const userAgent =
        typeof window.navigator === "undefined"
          ? ""
          : window.navigator.userAgent;
      const isMobileUserAgent = Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      );
      setDeviceType(isMobileUserAgent);
    }

    handleResize(); // Call once initially to set device type
    window.addEventListener("resize", handleResize); // Update device type on window resize

    return () => {
      // Clean up the listener on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
}

export default useIsMobile;
