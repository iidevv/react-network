import React from "react";
import preloaderImg from "../../../assets/images/preloader.svg"
const Preloader = () => {
  return (
    <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 d-b w-10" src={preloaderImg} alt="loading..." />
  );
};

export default Preloader;
