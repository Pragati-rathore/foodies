import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthData";
import "../../../App.css";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import FilterNavBar from "./FilterNavBar";
import SearchBar from "../SearchBar/SearchBar";
import OnlineDelivery from "../OnlineDelivery/OnlineDelivery";
import OnLineDlvryNavBar from "./OnLineDlvryNavBar";
import MainNavBar from "./MainNavBar";
import OfferNavBar from "./offerNavBar";

const NavBar = ({ scrollValue,searchbarshown=true}) => {
  const { checker } = useContext(AuthContext);
  const bgColor = { backgroundColor: " rgb(240, 240, 245)" ,border:"none"};

  const [currentScroll, setCurrentScroll] = useState(window.scrollY);

  const handleScroll = () => {
    setCurrentScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  



 


//   const [currentNavItem, setCurrentNavItem] = useState( <MainNavBAr />);
//   //const [renderNavBar , setRenderNavBar] = useState(<MainNavBAr/>)
//   let arrOfNav =[
//   //{locationPath:"/",scrollVal:1000 , navItem :()=>{<MainNavBAr/>}},
//   {locationPath:'/search',scrollVal:100 ,  navItem :FilterNavBar},
//   {locationPath:'/offer',scrollVal:100,  navItem :OnLineDlvryNavBar},
// ]


//   // let HandleRenderNav =()=>{
//   //   if (navType === "mainNAvBAr") {
//   //     return <MainNavBAr />;
//   //   } else if (navType === "filterNav" && currentNavItem) {
//   //     return <currentNavItem.navItem />;
//   //   } else {
//   //     return <MainNavBAr />;
//   //   }
//   //   // const navLoc= useLocation()
//   //   // console.log(navLoc)
//   //   // let currentPath = navLoc.pathname
//   //   // console.log(currentPath)
//   //   // arrOfNav.forEach((item,index)=>{
//   //   //   if(currentPath=== item.locationPath){
//   //   //      item.scrollVal= window.scrollY
//   //   //      console.log(window.scrollY)
        
//   //   //      return item.navItem
//   //   //   }
//   //   //   else{
//   //   //     return <MainNavBAr/>
//   //   //   }
//   //   // })
//   // }
//   const HandleRenderNav = () => {
//     const navLoc = useLocation();
//     const currentPath = navLoc.pathname;
//     const currentNavItemObj = arrOfNav.find((item) => item.locationPath === currentPath);

//     if (currentNavItemObj) {
//       setCurrentNavItem(currentNavItemObj);
//        console.log(currentNavItemObj)
//     } else {
//       setCurrentNavItem( <MainNavBAr />);
//     }
//   };

//   useEffect(() => {
//     HandleRenderNav();
//   }, []);
 


//   const handleNavBarChange = () => {
//     if ((navType = "mainNAvBAr")) {
//       return <MainNavBAr />;
//     }
//     if ((navType = "filterNav")) {
//       return <FilterNavBar />;
//     }
//     if ((navType = "OnLineDlvryNavBar")) {
//       return <OnlineDelivery />;
//     } else {
//       return <MainNavBAr />;
//     }
//   };

    const navLoc= useLocation()
    // console.log(navLoc)
    let currentPath = navLoc.pathname
    // console.log(currentPath)

  return (
    <>
      <div className="">
        <nav className="navbar">
        {currentScroll > scrollValue ? (
            <div className="filter-navBar">
              <FilterNavBar />
              <div className="srch-bar-nav">
                <SearchBar bgColor={bgColor} />
              </div>
            </div>
          ) : (
            <MainNavBar currentPath={currentPath} searchbarshown={searchbarshown} />
            
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;

// NavBar.js

// NavBar.js

// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../Context/AuthData";
// import "../../../App.css";
// import "./navbar.css";
// import { IoFastFoodSharp } from "react-icons/io5";
// import { FiSearch } from "react-icons/fi";
// import { BiSolidOffer } from "react-icons/bi";
// import { IoHelpBuoyOutline } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// import { FaCartShopping } from "react-icons/fa6";

// const NavBar = () => {
//   const { checker } = useContext(AuthContext);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleDropdownToggle = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <>
//       <div className="container">
//         <nav className="navbar">
//           <div className="flex-nav-main">
//             <div className="flex-inner-nav">
//               <div className="logo">
//                 <IoFastFoodSharp className="logo-icon" />
//               </div>
//               <div className="address-box">
//                 <div className="place">
//                   <h1>HOME</h1>
//                 </div>
//                 <div className="address">62 Lic colony indore</div>
//               </div>
//             </div>
//             <div className="nav-items">
//               <ul className={`flex-inner-nav ${showDropdown ? "dropdown" : ""}`}>
//                 <li className="nav-item">
//                   <div className="item-icon">
//                     <FiSearch className="itemIcon" />
//                   </div>
//                   <div className="item-hd">
//                     <h1>Search</h1>
//                   </div>
//                 </li>
//                 <li className="nav-item">
//                   <div className="item-icon">
//                     <BiSolidOffer className="itemIcon" />
//                   </div>
//                   <div className="item-hd">
//                     <h1>Offers</h1>
//                   </div>
//                 </li>
//                 <li className="nav-item">
//                   <div className="item-icon">
//                     <IoHelpBuoyOutline className="itemIcon" />
//                   </div>
//                   <div className="item-hd">
//                     <h1>Help</h1>
//                   </div>
//                 </li>
//                 {checker && (
//                   <li className="nav-item">
//                     <div className="item-icon">
//                       <CgProfile className="itemIcon" />
//                     </div>
//                     <div className="item-hd">
//                       <h1>Profile</h1>
//                     </div>
//                   </li>
//                 )}
//                 <li className="nav-item">
//                   <div className="item-icon">
//                     <FaCartShopping className="itemIcon" />
//                   </div>
//                   <div className="item-hd">
//                     <h1>Cart</h1>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//             <div className="dropdown-toggle" onClick={handleDropdownToggle}>
//               <span>&#9660;</span>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default NavBar;
