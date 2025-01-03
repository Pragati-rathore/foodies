import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Adress/Address.css";
import { RxCross1 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import AddressTyp from "../CartPage/AddressCard";

function AddressForm({ handleclosePopUp ,Setsampledata,SampleaddressData}) {
  const [FlatNo, setFlatNo] = useState("");
  const [Landmark, setLandMark] = useState("");
  const [addressTyp, setAddressTyp] = useState("");
  const [submitAddForm, setSubmitAddForm] = useState(false);
  const navigate = useNavigate();

  const homeButtonRef = useRef(null);
  const workButtonRef = useRef(null);
  const otherButtonRef = useRef(null);

  const handleClose = () => {
    handleclosePopUp();
  };

  // const AddFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(FlatNo, Landmark, addressTyp);
  //   setSubmitAddForm(true);
  //   handleClose()
  // };

  const Handlesubmit=(e)=>{
    e.preventDefault();
    const otherone=[...SampleaddressData,{
        Addresstype:addressTyp,
        Addresslocation:`${FlatNo} ${Landmark}`
        
      
    }]

    console.log(otherone)

    Setsampledata(otherone)
    setSubmitAddForm(true);
    handleClose()
  }

  return (
    <>
      <div></div>

      <div className="popup-form">
        <div className="popup-hd">
          <div className="from-hd">
            <div
              onClick={() => {
                handleclosePopUp();
              }}
            >
              <RxCross1 />
            </div>

            <h1>Save delivery address</h1>
          </div>
        </div>
        <div className="popup-main-box">
          <div>
            {submitAddForm ? (
              <AddressTyp />
            ) : (
              <form onSubmit={Handlesubmit}>
                <div>
                  <div className="forn-input">
                    <input
                      placeholder="Door / Flat No."
                      value={FlatNo}
                      onChange={(e) => setFlatNo(e.target.value)}
                    />
                  </div>
                  <div className="forn-input">
                    <input
                      placeholder="Landmark"
                      value={Landmark}
                      onChange={(e) => setLandMark(e.target.value)}
                    />
                  </div>
                </div>

                <ul className="btn-typ-adrs">
                  <li
                    className="btn-list"
                    onClick={(e) => {
                      e.preventDefault();
                      //setAddressTyp("Work")
                      setAddressTyp(homeButtonRef.current.innerText);
                    }}
                  >c
                    <span>
                      <IoHomeOutline />
                    </span>
                    <button ref={homeButtonRef}>Home</button>
                  </li>

                  <li
                    className="btn-list"
                    onClick={(e) => {
                      e.preventDefault();
                      //setAddressTyp("Work")
                      setAddressTyp(workButtonRef.current.innerText);
                    }}
                  >
                    <span>
                      <MdOutlineWorkOutline />
                    </span>
                    <button ref={workButtonRef}>work</button>
                  </li>

                  <li
                    className="btn-list"
                    onClick={(e) => {
                      e.preventDefault();
                      //setAddressTyp("Work")
                      setAddressTyp(otherButtonRef.current.innerText);
                    }}
                  >
                    <span>
                      <CiLocationOn />
                    </span>
                    <button ref={otherButtonRef}>other</button>
                  </li>
                </ul>

                <div>
                  <button
                    className="sumt-btn"
                    // onClick={(e) => AddFormSubmit(e)}
                    type="submit"
                  >
                    SAVE ADDRESS & PROCEED
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="bg-gry" onClick={handleClose}></div>
      </div>
    </>
  );
}

export default AddressForm;
