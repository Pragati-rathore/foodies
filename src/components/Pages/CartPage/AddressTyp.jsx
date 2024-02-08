import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import AddressForm from "../Adress/AddressForm";

function AddressCard() {
  const [showAddressForm, setShowAddressForm] = useState(false);

  const handleShowadrssForm = () => {
    console.log(!showAddressForm);
    setShowAddressForm(true);
  };
  const handleclosePopUp = () => {
    setShowAddressForm(false);
  };
 


  return (
    <>
      <div className="add-card-main">
        <div className="add-icon">
          <CiLocationOn className="location-icon" />
        </div>
        <div className="add-dtls">
          <h1>Add New Address</h1>
          <p>62 Lig Squr home near Mandir</p>
          <div className="add-btn">
            <button
              onClick={() => {
                handleShowadrssForm();
              }}
            >
              Add New
            </button>
          </div>
        </div>
      </div>
      {showAddressForm && (
        <AddressForm
          showAddressForm={showAddressForm}
          handleclosePopUp={handleclosePopUp}
        />
      )}
    </>
  );
}

export default AddressCard;
