import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../productDetails/ProductDetails.css";
import { IoStarSharp } from "react-icons/io5";
import { BsClockFill } from "react-icons/bs";
import CouponCard from "../CouponCard/CouponCard";
import NavBar from "../NavBar/NavBar";
import CartPage from "../CartPage/CartPage";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
} from "../../../Store Folder/Slice Folder/cartSlice"

function ProductDetails() {
  const [count , setCount] = useState(1)
  const [countBtn , setCountBtn] = useState(false)
  const { id } = useParams;
  const loc = useLocation();
  //const [cart, setCart] = useState([]);
  // console.log(loc);
  const detailsPduct = loc.state;
  // console.log(detailsPduct)


  // const addFood =(i)=>{
  //   console.log(i)
  //   setCountBtn(true)

  // }
  // const handleAddClick =()=>{
  //   setCount(count+1)
  // }
  // const handleSubtractClick = ()=>{
    
  //   if(count >1){
  //     setCount(count-1)
  //     console.log(count)
  //   }
  //   if(count<2){
  //     setCountBtn(false)
  //     console.log(countBtn)
  //     console.log(count)
  //   }
  // }
  const cart = useSelector((state) => state.cart);
  console.log(cart,"cart")
  const dispatch = useDispatch();



  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
console.log(existingItem )
console.log(item)
    if (existingItem) {
      dispatch(incrementCartItemQuantity(item));
    } else {
      dispatch(addItemToCart(item));
    }
    setCount(1);
    setCountBtn(true)
  };

  const incrementQuantity = (item) => {
    dispatch(incrementCartItemQuantity(item));
  };

  const decrementQuantity = (item) => {
    dispatch(decrementCartItemQuantity(item));
  };


  return (
    <>
      <NavBar />
      <div className="Main-container">
        <div className="main-box">
          <div>
            <ul className="details-nvgn">
              <Link to="/">
                <li>
                  <p className="nvgn-p">Home/</p>
                </li>
              </Link>

              <li>
                <p className="nvgn-p">Indore/</p>
              </li>
              <li>
                <p className="nvgn-p-restro">{detailsPduct.RestName}</p>
              </li>
            </ul>
          </div>
          <div className="main-prduct-dtl">
            <div className="Card_box_dtl">
              <div className="box">
                <div className="restroNamedtl">
                  <h1>{detailsPduct.RestName}</h1>
                </div>
                <div>
                  <p className="itemH-dtl">{detailsPduct.filterData}</p>
                </div>
                <div className="star-box">
                  <p className="itemH-dtl"> {detailsPduct.address}</p>
                </div>
              </div>
            </div>

            <div className="rateing">
              <div className="rtng-no">
                <IoStarSharp className="startIcon-dtl" />
                <p className="startIcon-dtl">{detailsPduct.star}</p>
              </div>
              <div>
                <p className="ratng-count">{detailsPduct.ratingCount} rating</p>
              </div>
            </div>
          </div>
          <div className="time">
            <div>
              <BsClockFill />
            </div>

            <div>
              <p>{detailsPduct.distance}</p>
            </div>
          </div>
          <div className="coupan">
            {detailsPduct.CouponCard.map((item, i) => (
              <CouponCard coponDetails={item} key={i} />
            ))}
          </div>
          <div className="rcmnd-main">
            <div>
              <h1 className="rcmnd-hd">Recommended</h1>
              {detailsPduct.menu.map((item, i) => (
                <div className="card-box" key={i}>
                  <div className="card-hd">
                    <h1 className="food-name">{item.foodItem}</h1>
                    <p className="food-para">₹{item.price}</p>
                    <div className="card-dscrptn">
                      <p>{item.descrption}</p>
                    </div>
                  </div>
                  <div className="card-img-box">
                    <div className="card-img">
                      <img src={item.imgCard} alt="img-card" />
                    </div>
                    <div className="add-card">
                  {cart.find((cartItem) => cartItem.id === item.id) ? (
                    <div className="count-btn">
                      <button
                        className="count-btn-click"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                      {cart.find((cartItem) => cartItem.id === item.id).quantity}
                      <button
                        className="count-btn-click"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                      {/* <CartPage
                      item={cart.find((cartItem) => cartItem.id === item.id)}
                      incrementQuantity={incrementQuantity}
                      decrementQuantity={decrementQuantity}
                    /> */}
                    </div>
                    
                  ) : (
                    <button className="addBtn" onClick={() => addToCart(item)}>
                      Add+
                    </button>
                  )}
                </div>
                    {/* <div className="add-card">
                      {countBtn ? <div className="count-btn">
                        <button className="count-btn-click" onClick={() => handleAddClick()}>+</button>
                        {count}
                        <button className="count-btn-click" onClick={() => handleSubtractClick()}>-</button>
                      </div>:
                        <button className="addBtn" onClick={()=>{addFood(item)}}>Add+</button>}

                    
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}//

// function ProductDetails() {
//   const [count , setCount] = useState(1)
//   const [countBtn , setCountBtn] = useState(false)
//   const { id } = useParams;
//   const loc = useLocation();
//   const [cart, setCart] = useState([]);
//   // console.log(loc);
//   const detailsPduct = loc.state;
//   // console.log(detailsPduct)


//   // const addFood =(i)=>{
//   //   console.log(i)
//   //   setCountBtn(true)

//   // }
//   // const handleAddClick =()=>{
//   //   setCount(count+1)
//   // }
//   // const handleSubtractClick = ()=>{
    
//   //   if(count >1){
//   //     setCount(count-1)
//   //     console.log(count)
//   //   }
//   //   if(count<2){
//   //     setCountBtn(false)
//   //     console.log(countBtn)
//   //     console.log(count)
//   //   }
//   // }
//   const addToCart = (item) => {
//     const existingItem = cart.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       setCart((prevCart) =>
//         prevCart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//       );
//     } else {
//       setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
//     }
//     setCount(1); // Reset the count to 1 after adding to the cart
//   };

//   const incrementQuantity = (item) => {
//     setCart((prevCart) =>
//       prevCart.map((cartItem) =>
//         cartItem.id === item.id
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem
//       )
//     );
//   };

//   const decrementQuantity = (item) => {
//     setCart((prevCart) =>
//       prevCart.map((cartItem) =>
//         cartItem.id === item.id && cartItem.quantity > 1
//           ? { ...cartItem, quantity: cartItem.quantity - 1 }
//           : cartItem
//       )
//     );
//   };

//   return (
//     <>
//       <NavBar />
//       <div className="Main-container">
//         <div className="main-box">
//           <div>
//             <ul className="details-nvgn">
//               <Link to="/">
//                 <li>
//                   <p className="nvgn-p">Home/</p>
//                 </li>
//               </Link>

//               <li>
//                 <p className="nvgn-p">Indore/</p>
//               </li>
//               <li>
//                 <p className="nvgn-p-restro">{detailsPduct.RestName}</p>
//               </li>
//             </ul>
//           </div>
//           <div className="main-prduct-dtl">
//             <div className="Card_box_dtl">
//               <div className="box">
//                 <div className="restroNamedtl">
//                   <h1>{detailsPduct.RestName}</h1>
//                 </div>
//                 <div>
//                   <p className="itemH-dtl">{detailsPduct.filterData}</p>
//                 </div>
//                 <div className="star-box">
//                   <p className="itemH-dtl"> {detailsPduct.address}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="rateing">
//               <div className="rtng-no">
//                 <IoStarSharp className="startIcon-dtl" />
//                 <p className="startIcon-dtl">{detailsPduct.star}</p>
//               </div>
//               <div>
//                 <p className="ratng-count">{detailsPduct.ratingCount} rating</p>
//               </div>
//             </div>
//           </div>
//           <div className="time">
//             <div>
//               <BsClockFill />
//             </div>

//             <div>
//               <p>{detailsPduct.distance}</p>
//             </div>
//           </div>
//           <div className="coupan">
//             {detailsPduct.CouponCard.map((item, i) => (
//               <CouponCard coponDetails={item} key={i} />
//             ))}
//           </div>
//           <div className="rcmnd-main">
//             <div>
//               <h1 className="rcmnd-hd">Recommended</h1>
//               {detailsPduct.menu.map((item, i) => (
//                 <div className="card-box" key={i}>
//                   <div className="card-hd">
//                     <h1 className="food-name">{item.foodItem}</h1>
//                     <p className="food-para">₹{item.price}</p>
//                     <div className="card-dscrptn">
//                       <p>{item.descrption}</p>
//                     </div>
//                   </div>
//                   <div className="card-img-box">
//                     <div className="card-img">
//                       <img src={item.imgCard} alt="img-card" />
//                     </div>
//                     <div className="add-card">
//                   {cart.find((cartItem) => cartItem.id === item.id) ? (
//                     <div className="count-btn">
//                       <button
//                         className="count-btn-click"
//                         onClick={() => decrementQuantity(item)}
//                       >
//                         -
//                       </button>
//                       {cart.find((cartItem) => cartItem.id === item.id).quantity}
//                       <button
//                         className="count-btn-click"
//                         onClick={() => incrementQuantity(item)}
//                       >
//                         +
//                       </button>
//                       {/* <CartPage
//                       item={cart.find((cartItem) => cartItem.id === item.id)}
//                       incrementQuantity={incrementQuantity}
//                       decrementQuantity={decrementQuantity}
//                     /> */}
//                     </div>
                    
//                   ) : (
//                     <button className="addBtn" onClick={() => addToCart(item)}>
//                       Add+
//                     </button>
//                   )}
//                 </div>
//                     {/* <div className="add-card">
//                       {countBtn ? <div className="count-btn">
//                         <button className="count-btn-click" onClick={() => handleAddClick()}>+</button>
//                         {count}
//                         <button className="count-btn-click" onClick={() => handleSubtractClick()}>-</button>
//                       </div>:
//                         <button className="addBtn" onClick={()=>{addFood(item)}}>Add+</button>}

                    
//                     </div> */}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default ProductDetails;
