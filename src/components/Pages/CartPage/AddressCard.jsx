import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import AddressForm from "../Adress/AddressForm";

function AddressTyp() {
  const [showAddressForm, setShowAddressForm] = useState(false);

  const handleShowadrssForm = () => {
    console.log(!showAddressForm);
    setShowAddressForm(true);
  };
  const handleclosePopUp = () => {
    setShowAddressForm(false);
  };

  const [SampleaddressData,setSampleaddressData]=useState([
    {
      Addresstype:"Home",
      Addresslocation:"62 Lig Squr home near Mandir"
    },
    {
      Addresstype:"Shop",
      Addresslocation:"69 Lig Squr home near Mandir"
    },
    {
      Addresstype:"Any",
      Addresslocation:"68 home near Mandir"
    }
  ]
  )
 

  

  return (
    <>
    <div className="addressparnt" style={{display:"flex", flexWrap:"wrap"}}>
    {SampleaddressData.map((addressitem)=>{
             return <div className="add-card-main" style={{margin:"1rem"}}>
        <div className="add-icon">
          <CiLocationOn className="location-icon" />
        </div>
        <div className="add-dtls">
          <h1>{addressitem.Addresstype}</h1>
          <p>{addressitem.Addresslocation}</p>
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
    })}
    </div>
      {showAddressForm && (
        <AddressForm
          showAddressForm={showAddressForm}
          handleclosePopUp={handleclosePopUp}
          Setsampledata={setSampleaddressData}
          SampleaddressData={SampleaddressData}
        />
      )}
    </>
  );
}

export default AddressTyp;
