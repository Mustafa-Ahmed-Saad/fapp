import React from "react";
import "./Layer.css";

export default function Layer({ hideLayer, children }) {
  return (
    <div
      className="layer top-0 start-0 bottom-0 end-0 position-fixed z-3 "
      onClick={hideLayer}
    >
      <div className="w-50 h-100 mx-auto">{children}</div>
    </div>
  );
}
