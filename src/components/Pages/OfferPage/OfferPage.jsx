import React from "react";
import OnlineDelivery from "../OnlineDelivery/OnlineDelivery";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setScrollValue } from "../../../Store Folder/Slice Folder/NavBarSlice";

function OfferPage() {
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
      <NavBar
        isScrolled={isScrolled}
        navType="filterNav"
        scrollValue={scrollValue}
      />
      <div className="Main-container">
        <OnlineDelivery />
      </div>
      <Footer/>
    </>
  );
}

export default OfferPage;
