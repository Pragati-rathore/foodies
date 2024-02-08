import React from "react";
import "./Heading.css";

function Heading({ hding }) {
  //console.log(hding)
  return (
    <>
      <div className="hd">
        <h2>{hding}</h2>
      </div>
    </>
  );
}

export default Heading;
