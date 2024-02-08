
import { BiSolidOffer } from "react-icons/bi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import LoginPage from "../AuthPages/LoginPage";
import { useState } from "react";

const OfferNavBar = () => {
    const bgColor = { backgroundColor: " rgb(240, 240, 245)" ,border:"none"};
    const [showLogin, setShowLogin] = useState(false);
    const navigate= useNavigate()
   
  const handleLoginPopUp = () => {
    setShowLogin(true);
    
  };
  const handleLoginPopUpClose = () => {
    setShowLogin(false);
    navigate("/")
  };

 return (
      <>
       <ul className="flex-inner-nav">
          <li className="nav-item" >
            <div style={{width:"27rem"}}>
            <SearchBar bgColor={bgColor}  />
            </div>
           
          </li>
          <li className="nav-item">
           
            {/* <Link to="/profile"> */}
            <IoPersonCircleSharp  className="profile-icon"  onClick={handleLoginPopUp}/>
            {/* </Link> */}
          </li>
         
        </ul>
        {showLogin && <LoginPage handleLoginPopUpClose={handleLoginPopUpClose} />}
      </>
    );
  };

  export default OfferNavBar;