import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import "./ProfilePage.css";

const OrderCard = ({ order }) => (
  <div className="order-card">
    <div className="ord-main-box">
      <div className="order-body-img">
        <img src={order.image} alt="Order item" className="order-image" />
      </div>
      <div className="order-header">
        <div className="restaurant-info">
          <div className="restaurant-name">{order.restaurantName}</div>
          <div className="restaurant-location">{order.location}</div>
        </div>
        <div className="order-time">
          <div className="order-delivered">
            Delivered on {order.deliveryDate}
          </div>
          {/* <div className="order-status">{order.status}</div> */}
          <div className="check-icon">
            <IoIosCheckmarkCircle className="iconChk" />
          </div>
        </div>
      </div>
    </div>
    <div className=" ord-total">
    <div className="order-details">
      {order.items.map((item) => (
       
          <div key={item.id} className="order-item">
            {item.name} x {item.quantity}
          </div>
       
      ))}
    </div>
    <div className="total-paid">Total Paid: ₹{order.totalPaid}</div>
    </div>
  

    <div className="order-footer">
    
      <div className="order-actions">
        <button className="reorder-button">REORDER</button>
        <button className="help-button">HELP</button>
      </div>
    </div>
  </div>
);

export default OrderCard;
