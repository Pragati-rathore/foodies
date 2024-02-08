// import React,{useState , useEffect} from "react";
// import NavBar from "../NavBar/NavBar";

// import MiddleSection from "./MiddleSection";
// import OnlineDelivery from "../OnlineDelivery/OnlineDelivery";

// function LandingPage (){
//     const [isScrolled, setIsScrolled] = useState(true);

//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       // console.log(scrollTop)

//        if(scrollTop>1102){
//         setIsScrolled(false);
//        }
//        else{
//         setIsScrolled(true)
//        }
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);

//         return () => {
//           window.removeEventListener("scroll", handleScroll);
//         };
//       }, []);

//     // console.log(window.screenY)
//     return(
//         <>
//         <div  >
//         <NavBar  isScrolled={isScrolled}/>
//         <div  className="Main-container">
//         <MiddleSection/>
//         <OnlineDelivery/>

//         </div>
//         </div>

//         </>
//     )
// }
// export default LandingPage;

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";

import MiddleSection from "./MiddleSection";
import OnlineDelivery from "../OnlineDelivery/OnlineDelivery";
import { useDispatch, useSelector } from "react-redux";
import { setScrollValue  } from "../../../Store Folder/Slice Folder/NavBarSlice";
import Footer from "../Footer/Footer";

function LandingPage() {
  const isScrolled = useSelector((state) => state.NavBarChng.isScrolled);
  const scrollValue = useSelector((state) => state.NavBarChng.scrollValue);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set the scroll value for this page
    dispatch(setScrollValue(1500)); // Replace 50 with your desired value

    // Cleanup function to reset the scroll value when component unmounts
    return () => {
      dispatch(setScrollValue(0)); // Reset to default or another value
    };
  }, [dispatch]);
  
  return (
    <>
      <div>
      <NavBar isScrolled={isScrolled} navType="mainNAvBAr" scrollValue={scrollValue} />
        <div className="Main-container">
          <MiddleSection />
          <OnlineDelivery />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default LandingPage;
