import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "../HomePage/HomePage.css";
import OnlineDelivery from "../OnlineDelivery/OnlineDelivery";
import { useDispatch, useSelector } from "react-redux";
import { setScrollValue } from "../../../Store Folder/Slice Folder/NavBarSlice";
import Footer from "../Footer/Footer";
import homeImg from "../../../assets/home-img.avif"

function HomePage() {
  const isScrolled = useSelector((state) => state.NavBarChng.isScrolled);
  const scrollValue = useSelector((state) => state.NavBarChng.scrollValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setScrollValue(100));
  
    return () => {
      dispatch(setScrollValue(0));
    };
  }, [dispatch]);

  return (
    <>
      <div>
        <NavBar
          isScrolled={isScrolled}
          navType="filterNav"
          scrollValue={scrollValue}
        />
        <div className="HomeImg">
          <div className="home-box">
            <div className="home-flex-1">
              <h1>Restaurants Near<br/> Me</h1>
            </div>
            <div className="home-flex-2">
                <img src={homeImg}/>
            </div>
          </div>
        </div>

        <div className="Main-container-home">
          <OnlineDelivery />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default HomePage;
