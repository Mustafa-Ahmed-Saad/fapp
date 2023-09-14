import React, { useState } from "react";
import "./ContactPage.css";
import Star from "./../../reusableComponent/star/Star";

export default function ContactPage() {
  const [inputs] = useState([
    { type: "text", placeHolder: "userName" },
    { type: "number", placeHolder: "userAge" },
    { type: "email", placeHolder: "userEmail" },
    { type: "password", placeHolder: "userPassword" },
  ]);

  // Create a state object to store label class names an it will be like that
  //    {userName: "top-70px",
  //     userAge: "top-70px",
  //     userEmail: "top-70px",
  //     userPassword: "top-70px",}
  const [labelClasses, setLabelClasses] = useState({});

  function showLabel(e) {
    const inputPlaceholder = e.target.placeholder;
    const value = e.target.value;

    // Update the label class based on the input value
    setLabelClasses((prevClasses) => ({
      ...prevClasses,
      [inputPlaceholder]: value ? "top-0" : "top-70px",
    }));
  }

  function handelSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="contact">
      <div className="container py-5 ">
        <h2 className="fw-bold text-center">CONATCT SECTION</h2>
        <div className="text-center">
          <Star color="black" style={{ display: "none" }} />
        </div>
        <form className="w-75 mx-auto">
          {inputs.map((inputInfo, index) => {
            return (
              <div key={index}>
                <label
                  htmlFor={inputInfo.placeHolder}
                  className={`text-main-color position-relative z-n1 ${
                    labelClasses[inputInfo.placeHolder] || "top-70px"
                  }`}
                >
                  {inputInfo.placeHolder} :
                </label>
                <input
                  id={inputInfo.placeHolder}
                  className="form-control border-0 border-bottom py-3 mb-3"
                  type={inputInfo.type}
                  placeholder={inputInfo.placeHolder}
                  onInput={showLabel}
                />
              </div>
            );
          })}
          <button className="btn btn-primary" onClick={handelSubmit}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
