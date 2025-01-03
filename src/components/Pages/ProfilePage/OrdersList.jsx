import React from "react";
import "../ProfilePage/ProfilePage.css"
import OrderCard from "./OrderCard";

const OrdersList = ({orderData}) => (
  
    <div className="orders-list">
      <div>
      <h1 className="pastOder-hd">Past Order</h1>
        <div>
        {orderData.map(order => <OrderCard key={order.id} order={order} />)}
        </div>
      </div>
      
    </div>
  );

  export default OrdersList;