import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import "../AuthPages/CouponCard.css";
import "../CouponCard/CouponCard.css"

function CouponCard({ coponDetails }) {
  // console.log(coponDetails);

  return (
    <>
      <div className="Coupn-main">
        <div className="coupn-hd">
          <div className="">
            <BiSolidOffer className="offer-icon" />
          </div>
          <div>
            <h1 className="cupn-hd">{coponDetails.couponHd}</h1>
          </div>
        </div>
        <div className="code">
          <p>USE {coponDetails.code}</p>
        </div>
      </div>
    </>
  );
}

export default CouponCard;
