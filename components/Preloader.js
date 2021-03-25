import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PreloaderImage from "../assets/images/loader.png";

const Preloader = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.pathname && setLoading(true);
    // handleComplete event was not firing
    const handleComplete = (url) =>
      url === router.pathname && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div className="preloader">
        <img
          src={PreloaderImage}
          width="75"
          className="preloader__image"
          alt=""
        />
      </div>
    )
  );
};

export default Preloader;
