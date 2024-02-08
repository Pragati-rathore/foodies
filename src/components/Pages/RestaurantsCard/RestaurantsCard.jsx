// import React, { useContext, useState } from "react";
// import "./restaurants.css";
// import { MdStars } from "react-icons/md";
// import { AuthContext } from "../../Context/AuthData";

// function RestaurantsCard() {
//   const { CardData } = useContext(AuthContext);

//   console.log(CardData);
//   const { imgarr, width, heading, height, card } = CardData;

//   const [slideImg, setSlideImg] = useState(0);
//   const nextSlide = (e) => {
//     e.preventDefault();
//     setSlideImg((prevIndex) => (prevIndex + 1) % obj.imgarr.length);
//   };

//   const prevSlide = (e) => {
//     e.preventDefault();
//     setSlideImg((prevIndex) =>
//       prevIndex === 0 ? obj.imgarr.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>
//       {imgarr.map((item, i) => {
//         return (
//           <div>
//             <div className=" CardMain">
//               <div
//                 className="imgBoxCard"
//                 key={i}
//                 style={{
//                   width: width,
//                   height: height,
//                   transform: `translateX(-${slideImg * 100}%)`,
//                   transition: "transform 0.5s ease",
//                 }}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.alt}
//                   className={slideImg ? "add" : ""}
//                 />
//               </div>
//               <div className="offer">
//                 <h1>{item.offer}</h1>
//               </div>
//             </div>
//             <div className="box">
//               <div className="restroName">
//                 <h1>{item.RestName}</h1>
//               </div>
//               <div className="star-box">
//                 <div>
//                   <MdStars className="startIcon" />
//                 </div>
//                 <h1 className="itemH"> {item.star}.</h1>
//                 <h1 className="itemH">{item.time}</h1>
//               </div>
//               <div>
//                 <p className="address">{item.address}</p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default RestaurantsCard;




import React, { useContext, useState } from "react";
import "./restaurants.css";
import { MdStars } from "react-icons/md";
import { AuthContext } from "../../Context/AuthData";
import { Link, useParams } from "react-router-dom";

function RestaurantsCard({item ,i,style}) {
 

  //console.log(item ,i,style);
  // const { imgarr, width, heading, height, card } = CardData;

  // const [slideImg, setSlideImg] = useState(0);
  // const nextSlide = (e) => {
  //   e.preventDefault();
  //   setSlideImg((prevIndex) => (prevIndex + 1) % obj.imgarr.length);
  // };

  // const prevSlide = (e) => {
  //   e.preventDefault();
  //   setSlideImg((prevIndex) =>
  //     prevIndex === 0 ? obj.imgarr.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <>
    <div >
    <Link to={`/Product/${item.id}`} state={item}>
    <div className="Card_box">
            <div className=" CardMain">
              
              <div
                className="imgBoxCard"
                key={i}
                // style={{
                //   width:obj. width,
                //   height: obj.height,
                //   transform: `translateX(-${slideImg * 100}%)`,
                //   transition: "transform 0.5s ease",
                // }}
                style={style}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  // className={slideImg ? "add" : ""}
                />
              </div>
             
              <div className="offer">
                <h1>{item.offer}</h1>
              </div>
            </div>
            <div className="box">
              <div className="restroName">
                <h1>{item.RestName}</h1>
              </div>
              <div className="star-box">
                <div>
                  <MdStars className="startIcon" />
                </div>
                <h1 className="itemH"> {item.star}.</h1>
                <h1 className="itemH">{item.time}</h1>
              </div>
              <div>
                <p className="address">{item.address}</p>
              </div>
            </div>
          </div>
          </Link>
    </div>
         
       
    </>
  );
}

export default RestaurantsCard;
