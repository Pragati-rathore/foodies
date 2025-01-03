import React, { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import AddressCard from "./AddressCard";
import NavBar from "../NavBar/NavBar";
import pizza from "../../../assets/ord-img.jpg";
import { GiThreeLeaves } from "react-icons/gi";
import "../CouponCard/CouponCard.css";
import { BiSolidOffer } from "react-icons/bi";
import "./CartPage.css";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GiWallet } from "react-icons/gi";
import AddressTyp from "./AddressCard";
// import { createQuery } from "../Api/Const";
// // import baseURL from "../Api/Api"
// import Api from "../Api/Api";

function CartPage({item}) {
  const [showTypAdd, setShowTypAdd] = useState(false);
  console.log(item);
  // if (!item) {
  //   return null; // You can return null or a loading message or handle it as needed
  // }
  // const data = createQuery()
  // console.log(data)
  // const fetch =async()=>{
  //   const newQuery = createQuery()
  //     const res= await Api.get("/products",newQuery)
  //     console.log(res)

  // }

  //   useEffect(()=>{
  //     // const fetch = async() => {
  //     //     const newQuery = createQuery()
  //     //     const response =await Api.get('/products',newQuery)
  //     //     console.log(response)

  //     // }
  //     return()=>{fetch()}
  // },[])

  console.log(navigator);

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((postion) => {
      //console.log(postion);
      //     const latitude=postion.coord.latitude

      //     const longitude=postion.coord.longitude

      // console.log(latitude,longitude)
    });
  } else {
    //console.log("er");
  }
  let arr = ["r", "r", "r", "p"];

  for (let i = 0; i <= arr.length - 1; i++) {
    //console.log(arr[i]);
  }

  return (
    <>
      <NavBar searchbarshown={false} />
      <div className="card-pg">
        <div className="Main-container-cardpg">
          <div className="Card-main">
            <div className="Card-box-1">
              <div className="loc-icon-side">
                <GoLocation />
              </div>
              <div>
                <div className="Select-addrss">
                  <div className="hd-add">
                    <h1>Select delivery address</h1>
                    <p>You have a saved address in this location</p>
                  </div>
                  <div className="address-typ">
                    {showTypAdd ? <AddressTyp /> : ""}
                  </div>
                  <div className="address-card">
                    <AddressCard />
                  </div>
                </div>
                <div className="pymt">
                  <div className="pymt-icon">
                    <GiWallet />
                  </div>
                  <h1>Payment</h1>
                </div>
              </div>
            </div>
            <div className="Card-box-2">
              <div className="box-2-main">
                <div className="odr-dtles">
                  <div className="odr-img">
                    <img src={pizza} alt="pizza" />
                  </div>
                  <div className="ord-dscrptn">
                    <h1>Pizza Hut</h1>
                    <p>Hoshangabad Road</p>
                    <hr className="hr" />
                  </div>
                </div>
                <div className="ord-item">
                  <div className="item">
                    <div className="item-dscptn">
                      <div className="icon-veg">
                        <GiThreeLeaves />
                      </div>
                      <div className="item-dscrpn">
                        {/* <h1>Paneer Tikkat Rice Bowl</h1> */}
                        <h1></h1>
                        <p>Customise</p>
                      </div>
                    </div>
                    {/* <div className="Add-quntity">
                      <button>-</button>
                      <p>2</p>
                      <button>+</button>
                    </div> */}
                    {/* <div className="cart-item-quantity">
                      <button onClick={() => decrementQuantity(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item)}>+</button>
                    </div> */}
                    <div className="Total-amnt">
                      <p>₹299</p>
                      <p>Price: ₹</p>
                    </div>
                  </div>
                  <div className="suggsn-box">
                    <textarea placeholder="Any suggestions? We will pass it on..."></textarea>
                  </div>

                  <div>
                    <div className="applied-cupn">
                      <div className="coupn-hd">
                        <div className="">
                          <BiSolidOffer className="offer-icon" />
                        </div>
                        <div>
                          <h1 className="cupn-hd">Apply Coupon</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bill-dtl">
                    <h1>Bill Details</h1>
                    <ul className="dill-total">
                      <li className="amutn-dtls">
                        <p>Item Total</p>
                        <p>299</p>
                      </li>
                      <li className="amutn-dtls">
                        <p className="info-icon">
                          Delivery Fee | 4.7km{" "}
                          <span>
                            <IoIosInformationCircleOutline />
                          </span>
                        </p>

                        <p>42</p>
                      </li>
                      <hr className="line" />
                      <li className="amutn-dtls">
                        <p>Delivery Tip</p>
                        <p>Add Tip</p>
                      </li>
                      <li className="amutn-dtls">
                        <p className="info-icon">
                          Platform fee{" "}
                          <span>
                            <IoIosInformationCircleOutline />
                          </span>
                        </p>
                        <p>3</p>
                      </li>
                      <li className="amutn-dtls">
                        <p className="info-icon">
                          GST and Restaurant Charges{" "}
                          <span>
                            <IoIosInformationCircleOutline />
                          </span>
                        </p>
                        <p>41.47</p>
                      </li>
                      <hr className="line-2" />
                    </ul>
                  </div>
                </div>
                <div className="odr-total">
                  <h1>To Pay</h1>
                  <h1>₹456</h1>
                </div>
              </div>
              <div className="Saving">
                <p>Saving of ₹2</p>
              </div>

              <div className="review-odr-box">
                <div className="review-odr">
                  <h1>
                    Review your order and address details to avoid cancellations
                  </h1>
                  <p>
                    <span style={{ color: "red" }}>Note:</span> If you cancel
                    within 60 seconds of placing your order, a 100% refund will
                    be issued. No refund for cancellations made after 60
                    seconds.
                  </p>
                  <div className="avoid-cncltn">
                    <p style={{ color: "gray" }}>
                      {" "}
                      Avoid cancellation as it leads to food wastage.
                    </p>
                  </div>
                  <div className="policy">
                    <p>Read cancellation policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
