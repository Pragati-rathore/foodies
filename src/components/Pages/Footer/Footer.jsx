import React from "react";
import DownloadBtn from "./DownloadBtn";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import "./Footer.css"
import FooterList from "./FooterList";

function Footer() {
  const CompanyList ={
    heading : "Company",
    list:[
      "About", "Careers","Team" ,"Swiggy One","Swiggy Instamart","Swiggy Geni"
    ]
  }
  const ContactUsList ={
    heading : "Contact us",
    list:[
      "Help & Support","Partner with us","Ride with us"
    ]
  }
  const LegalList ={
    heading : "Legal",
    list:[
      "Terms & Conditions","Cookie Policy","Privacy Policy"
    ]
  }
  const WeDeliverList ={
    heading : "We deliver to:",
    list:[
     "Bangalore","Gurgaon","Hyderabad","Delhi","Mumbai"

    ]
  }



  return (
    <>
      <div className="Footer-main">
        <div className="footer-box-1">
          <div className="box-1">
            <h1>For better experience,download <br/> the Swiggy app now</h1>
          </div>
          <ul className="box-2">
            <li>
              <DownloadBtn icon={<FaApple/>}  device={"Google Play"}/>
            </li>
            <li>
              <DownloadBtn icon={<FaGooglePlay/>} device={"App Store"}/>
            </li>
          </ul>
        </div>
        <div className="footer-box-2">
          <div>
            <div className="ftr-flex-hd">
            <IoFastFoodSharp />
            <h1>Foodies</h1>
            
            </div>
            <p className="list-item">© 2023 Bundl Technologies <br/> Pvt. Ltd</p>

          </div>
          <div>
            <FooterList list={CompanyList}/>
          </div>
          <div>
            <FooterList list={ContactUsList}/>

            <FooterList list={LegalList} className="gap"/>
          </div>
          
          <div>
            <FooterList list={WeDeliverList}/>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Footer;
