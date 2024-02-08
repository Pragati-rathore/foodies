import React from 'react';
import './Sidebar.css'; 

const Sidebar = ({ sideBardItem}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        {sideBardItem.map((item,i)=>(
          <>
           <div className="menu-item" key={i}>
          <i className="icon uil uil-estate"></i>
          <span>{item}</span>
        </div>
          </>
        ))}
       
        {/* <div className="menu-item">
          <i className="icon uil uil-package"></i>
          <span>Swiggy One</span>
        </div>
        <div className="menu-item">
          <i className="icon uil uil-heart"></i>
          <span>Favourites</span>
        </div>
        <div className="menu-item">
          <i className="icon uil uil-bill"></i>
          <span>Payments</span>
        </div>
        <div className="menu-item">
          <i className="icon uil uil-map-marker"></i>
          <span>Addresses</span>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
