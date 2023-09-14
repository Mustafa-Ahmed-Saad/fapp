import React, { useState } from "react";
import Star from "../../reusableComponent/star/Star";
import img1 from "../../imgs/port1.png";
import img2 from "../../imgs/port2.png";
import img3 from "../../imgs/port3.png";
import "./PortfolioPage.css";

export default function PortfolioPage() {
  const [data] = useState([img1, img2, img3, img1, img2, img3]);

  return (
    <div id="Portfolio" className="mb-4">
      <div className="container text-center">
        <h2 className="fs-1 fw-bold">PORTFOLIO COMPONENTs</h2>
        <Star color="black" />
        <div className="row g-5">
          {data.map((item) => (
            <div className="col-12 col-md-4">
              <div className="rounded-3 position-relative overflow-hidden">
                <div className="layout position-absolute bottom-0 start-0 end-0 top-0 opacity-0 bg-main-color d-flex align-items-center justify-content-center text-white">
                  <i class="fa-solid fa-plus fa-5x"></i>
                </div>
                <img className="w-100" src={item} alt="item1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
