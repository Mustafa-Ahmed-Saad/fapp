import React from "react";
import personSVG from "../../imgs/avataaars.svg";
import Star from "../../reusableComponent/star/Star";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div id="home" className="py-2 bg-main-color">
      <div className="container text-center text-white">
        <div className="img-container mx-auto my-4">
          <img className="w-100" src={personSVG} alt="person" />
        </div>
        <h2>START FRAMEWORK</h2>
        <Star />
        <div>Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
  );
}
