import React, { useContext, useState } from "react";
import "./slider.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import RestaurantsCard from "../RestaurantsCard/RestaurantsCard";
//import { AuthContext } from "../../Context/AuthData";
import Heading from "../Heading/Heading";
import ImageArr from "../ImageArr/ImageArr";

function Slider({ obj }) {
 const [slideImg, setSlideImg] = useState(0);
  const nextSlide = (e) => {
    e.preventDefault();
    setSlideImg((prevIndex) => (prevIndex + 1) % obj.imgarr.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setSlideImg((prevIndex) =>
      prevIndex === 0 ? obj.imgarr.length - 1 : prevIndex - 1
    );
  };
 

  return (
    <>
      <div className="slider">
        <div className="Slider-top">
          {/* <div className="slider-hd">
            <h2>{obj.heading}</h2>
          </div> */}
          <Heading hding = {obj.heading}/>
          <div className="slider-btns">
            <div>
              <FaArrowAltCircleLeft className="arrow-btn" onClick={(e)=>nextSlide(e)}/>
            </div>
            <div>
              <FaArrowAltCircleRight
                className="arrow-btn"
                onClick={(e)=>prevSlide(e)}
              />
            </div>
          </div>
        </div>

        {obj.card === true ? (
          <>
          <div className="slider-imgs">
            <div className="slider-flex">
            {obj.imgarr.map((item, i) => (
              <RestaurantsCard item={item} i={i} obj={obj}  style={{
                width: obj.width,
                height: obj.height,
                transform: `translateX(-${slideImg * 100}%)`, 
                transition: "transform 0.5s ease", 
              }}/>
            ))}
           
            </div>
          </div>
            
           
          </>
        ) : (
          <div className="slider-imgs">
            <div className="slider-flex">
              {obj.imgarr.map((item, id) => (
                <ImageArr item={item} id={id} obj={obj} style={{
                  width: obj.width,
                  height: obj.height,
                  transform: `translateX(-${slideImg * 100}%)`, 
                  transition: "transform 0.5s ease", 
                }} />
               
              ))}
            </div>
          </div>
        )}
        {/* <div className="slider-imgs">
            <div className="slider-flex" >
            {obj.imgarr.map((item, id) => (
          <div className="imgBox"  key={id} style={{width:obj.width,  transform: `translateX(-${slideImg * 100}%)`, // Slide to the current image
          transition: "transform 0.5s ease", // Smooth transition effect
        }} >
            <img src={item.img} alt={item.alt}  className={slideImg ? "add":""}/>
          </div>
        ))}
            </div>
       
        </div> */}
        {/* <div className="">
            <div className="container">
            {sliderData.map((item, id) => (
          <div className="img-container"  key={id}>
            <img src={item.img} />
          </div>
        ))}
            </div>
       
        </div> */}

        {/* {sliderData.map=((item,i)=>
            
                
            )} */}
      </div>
    </>
  );
}
export default Slider;
