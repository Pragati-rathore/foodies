import React from "react";
import "./ProfilePage.css"

const UserProfile = () => (
    <div className="user-profile">
      <div className="user-details">
        <div className="user-name">Pragati</div>
        <div className="user-dtl">
        <div className="user-phone">7865421</div>
        <div className="user-email">pr@gmail.com</div>
        </div>
       
      </div>
      <button className="edit-profile-button">EDIT PROFILE</button>
    </div>
  );

export default UserProfile;