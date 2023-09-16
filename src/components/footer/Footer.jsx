import React from "react";
import "./footerStyle.css";

export default function Footer() {
  return (
    <>
      <div className="footer text-white py-5">
        <div className=" container">
          <div className="row">
            <div className="col-12 col-lg-4 text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <h3>AROUND THE WEB</h3>
              <div className="text-center icons">
                <i className="fa-brands fa-facebook rounded-circle p-2 mx-1"></i>
                <i className="fa-brands fa-twitter rounded-circle p-2 mx-1"></i>
                <i className="fa-brands fa-linkedin-in rounded-circle p-2 mx-1"></i>
                <i className="fa-solid fa-globe rounded-circle p-2 mx-1"></i>
              </div>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-white py-3">
        <div className="container">
          <p className="text-center">Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
}
