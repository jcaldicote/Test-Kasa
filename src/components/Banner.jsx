import React from "react";
import ImgMainBanner from "../assets/imghome.png";
import ImgAboutBanner from "../assets/imgabout.png";
import "./Banner.scss";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <img
        src={ImgMainBanner}
        alt="banner-Kasa-Main"
        className="main-banner__img"
      />
      <h2 className="main-banner__txt">Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export function AboutBanner() {
  return (
    <div className="about-banner">
      <img
        src={ImgAboutBanner}
        alt="banner-Kasa-About"
        className="main-banner__img"
      />
    </div>
  );
}
