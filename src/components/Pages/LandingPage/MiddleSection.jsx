import React, { useContext } from "react";
import Slider from "../Slider/slider";

import { AuthContext } from "../../Context/AuthData";

function MiddleSection() {
  const {  objOffer, objFoodVarity, CardData } =
    useContext(AuthContext);


  return (
    <>
      <div
        
      >
        <Slider obj={objOffer} />
        <Slider obj={objFoodVarity} />
        <Slider obj={CardData} />
      </div>
    </>
  );
}

export default MiddleSection;
