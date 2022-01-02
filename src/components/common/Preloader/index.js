import React from "react";
import preloaderImg from "../../../assets/images/preloader.svg"
const Preloader = () => {
  return (
    <img className="d-b w-10" src={preloaderImg} alt="loading..." />
  );
};

export default Preloader;
