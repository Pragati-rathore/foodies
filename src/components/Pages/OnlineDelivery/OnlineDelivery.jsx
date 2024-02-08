import React, { useContext, useState } from "react";
import "./onlineDelivery.css";
import Heading from "../Heading/Heading";
import { AuthContext } from "../../Context/AuthData";
import { useCallback } from "react";
import RestaurantsCard from "../RestaurantsCard/RestaurantsCard";
import { BsFilter } from "react-icons/bs";
import FilterNavBar from "../NavBar/FilterNavBar";

function OnlineDelivery() {
  const hding = "Restaurants with online food delivery in -------";
  //
  const { CardData } = useContext(AuthContext);
  


  

  return (
    <>
      <div>
        <div>
          <Heading hding={hding} />
        </div>

        <div >
          <div className="Flter-nav-box">
          <FilterNavBar/>
          </div>
        
          {/* {
                CardData.imgarr.map((item, id )=>(
                    <RestaurantsCard item={item} id={id} CardData={CardData}/>
                ))
                
            } */}
          <div className="BoxMain">
            {CardData.imgarr.map((item, id) => (
              <RestaurantsCard
              key={id}
                item={item}
                id={id}
                obj={CardData}
                style={{
                  width: CardData.width,
                  height: CardData.height,
                }}
              />
            ))}
            {/* <RestaurantsCard/> */}
          </div>

          {/* {CardData.imgarr.map((item, id) => (
              <RestaurantsCard />
            ))} */}
        </div>
      </div>
    </>
  );
}

export default OnlineDelivery;
