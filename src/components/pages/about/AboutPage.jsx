import React from "react";
import Star from "./../../reusableComponent/star/Star";

export default function AboutPage() {
  return (
    <div id="about" className="bg-main-color py-5">
      <div className="container text-center text-white">
        <h2>ABOUT COMPONENT</h2>
        <Star />
        <div className="row px-5">
          <div className="col-12 col-md-6 text-start">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-12 col-md-6 text-start">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
