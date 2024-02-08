import React from "react";
import { CiSearch } from "react-icons/ci";
import "./SearchBar.css"

function SearchBar({bgColor }) {
  return (
    <>
    <div >
      <div className="Bar-box" style={bgColor} >
        <div className="bar-input" >
          <input placeholder="Search For restaurants and food"  style={bgColor} className="srchInput"/>
        </div>
        <div>
          <CiSearch className="Search-icon"/>
        </div>
      </div>
      </div>
    </>
  );
}

export default SearchBar;
