import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthData";
import "../../../App.css";
import "./navbar.css";

import FilterNavBar from "./FilterNavBar";
import SearchBar from "../SearchBar/SearchBar";

const OnLineDlvryNavBar = ({ isScrolled }) => {
  const { checker } = useContext(AuthContext);
  const bgColor = { backgroundColor: " rgb(240, 240, 245)" };





  return (
    <>
      

      <div className="">
        <nav className="navbar">
          
           <p>hi i am from online diliver</p>
          
            <div className="filter-navBar" >
              <FilterNavBar />
              <div className="srch-bar-nav">
              <SearchBar bgColor={bgColor}/>
              </div>
             
            </div>
        
        </nav>
      </div>
    </>
  );
};

export default OnLineDlvryNavBar;


