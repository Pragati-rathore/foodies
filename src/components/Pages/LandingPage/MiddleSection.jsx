import React, { useContext } from "react";
import SliderCom from "../Slider/SliderCom";

import { AuthContext } from "../../Context/AuthData";

function MiddleSection() {
  const {  objOffer, objFoodVarity, CardData } =
    useContext(AuthContext);


  return (
    <>
      <div
        
      >
        <SliderCom obj={objOffer} />
        <SliderCom obj={objFoodVarity} />
        <SliderCom obj={CardData} />
      </div>
    </>
  );
}

export default MiddleSection;
