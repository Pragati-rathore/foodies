import React from "react";
import { useState } from "react";
import "./LoginPage.css";
import { login } from "../../../Store Folder/Slice Folder/UserloginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName , setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  // const handlesignup = async (e) => {
  //   e.preventDefault();
  
  
  //   const formData = new FormData();
  //   formData.append('firstName', firstName);
  //   formData.append('lastName', firstName);
  //   formData.append('email', email);
  //   formData.append('password', password);
  
  //   try {
     
  //     const response = await fetch('https://gourmet-deployment.onrender.com/user/signup', {
  //       method: 'POST',
  //       body: formData,
  //     });
  
  //     if (response.ok) {
  //       dispatch(login());
  //       navigate("/profile");
  //     } else {
       
  //       console.log("error found")
  //     }
  //   } catch (error) {
  //     throw(error)
  //   }
  // };

  const handlesignup = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("password", password);
  
      try {
        const response = await fetch(
          "https://gourmet-deployment.onrender.com/user/signup",
          {
            method: "POST",
            body: formData,
          }
        );
  
        if (response.ok  ) {
          dispatch(login());
          navigate("/landingPage");
        } else {
          console.log("Error occurred during signup.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };
  



  const validateForm = () => {
    let errors = "";
  
    if (!firstName) {
      errors += "First name is required. ";
    }
    if (!firstName) {
      errors += "Last name is required. ";
    }
    
    if (!email) {
      errors += "Email is required. ";
    } else if (!isValidEmail(email)) {
      errors += "Invalid email format. ";
    }
    
  
    if (!password) {
      errors += "Password is required. ";
    } else if (password.length < 8) {
      errors += "Password must be at least 8 characters. ";
    }
  
    setError(errors);
    return errors === "";
  };
  
  const isValidEmail = (email) => {
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  
  
 


  return (
    <>
      <form onSubmit={handlesignup}>
        <div>
          <div className="forn-input">
            <input
           
              type="text"
              placeholder="First name "
              onChange={(e) => setFirstName(e.target.value)}
          
            />
          </div>
          <div className="forn-input">
            <input
           
              type="text"
              placeholder="Last name "
              onChange={(e) => setLastName(e.target.value)}
          
            />
          </div>
          <div className="forn-input">
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="forn-input">
            <input  placeholder="Password"onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="error">

               <p>{error}</p>
          </div>
          
        </div>


        <div>
          <button className="sumt-btn">Continue</button>
        </div>
      </form>
    </>
  );
}

export default SignUpPage;
