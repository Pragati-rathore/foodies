import React, { useState } from "react";
import "./LoginPage.css";
import { RxCross1 } from "react-icons/rx";
import LoginImg from "../../../assets/login.avif";
import SignUpPage from "./SignPage";
import { useNavigate } from "react-router-dom";

function LoginPage({ handleLoginPopUpClose }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showotpinput, setShowotpinput] = useState(false);
  const [sendOtp , setSendOtp] = useState(false)
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = () => {
    setShowSignUp(!showSignUp);
  };

  const handleLogin = async (e) => {
 e.preventDefault();

    const loginData = {
      email,
      password,
    };

    if (validateForm()) {
      try {
        const loginResponse = await fetch(
          " https://gourmet-deployment.onrender.com/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          }
        );
        const responseBody = await loginResponse.json();

        if (loginResponse.ok) {
          localStorage.setItem('token', responseBody.token);
          navigate("/landingPage");
         
        } else {
          throw "error found";
        }
      } catch (error) {}
    }
  };

  const ShowOtpFileds = () => {
    setShowotpinput(!showotpinput);
  };

  const handlEmailAuth = async (e) => {
    e.preventDefault();

    const authMailData = {
      email,
      otp: sendOtp ? otp : undefined,
    };

    if (isValidEmail()) {
      try {
        const authMailResponse = await fetch(
          " https://gourmet-deployment.onrender.com/user/authmail",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(authMailData),
          }
        );

        if (authMailResponse.ok) {
          console.log("otp send")
          setSendOtp(true)
          // navigate("/landingPage");
         
        } else {
          throw "error found";
        }

       
      } catch (error) {
        throw error;
      }
    }
  };


  const handleverifyOtp=async(e)=>{
    e.preventDefault();
 
    const userverifyData = {
      email,
      otp
    };

    try {

      const VerifyResponse = await fetch('https://gourmet-deployment.onrender.com/user/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userverifyData),
      });

      if (VerifyResponse.ok) {
          navigate("/profile")
          console.log("otp")
          
      } else {

        throw("error found")
      }
    } catch (error) {

      throw(error)
    }
  }







  const validateForm = () => {
    let errors = "";

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
      <div className="login-container">
        <div className=" login-main">
          <div className="hd-box-login">
            <div className="login-hd">
              <div
                onClick={() => {
                  handleLoginPopUpClose();
                }}
              >
                <RxCross1 />
              </div>

              <h1>{showSignUp ? "Sign Up" : "Login"}</h1>
            </div>
            <div className="crct-accnt">
              <p>
                or{" "}
                <a
                  onClick={() => {
                    handleSignIn();
                  }}
                >
                  {showSignUp ? "login to your account" : "Creact an account"}
                </a>
              </p>
            </div>
            <div className="logim-img">
              <img src={LoginImg} />
            </div>
          </div>
          <hr className="hr" />
          <div className=" login-form">
            <div>
              {showSignUp ? (
                <SignUpPage />
              ) : (
                <form>
                  {showotpinput ? (
                    <div>
                      <div className="forn-input">
                        <input
                          placeholder="Email"
                          type="email"
                          required
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      {sendOtp?
                      <div className="forn-input">
                      <input
                        placeholder="ENTER OTP"
                        type="text"
                        required
                        onChange={(e) => {
                          setOtp(e.target.value);
                        }}
                      />
                    </div>:""
                      }
                      {/* <div className="forn-input">
                        <input
                          placeholder="ENTER OTP"
                          type="text"
                          required
                          onChange={(e) => {
                            setOtp(e.target.value);
                          }}
                        />
                      </div> */}
                    </div>
                  ) : (
                    <div>
                      <div className="forn-input">
                        <input
                          placeholder="Email"
                          type="email"
                          required
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="forn-input">
                        <input
                          placeholder="Password"
                          type="password"
                          required
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="error">
                    <p>{error}</p>
                  </div>
                  <div>
                    <button
                      type="Submit"
                      className="sumt-btn"
                      onClick={showotpinput ? sendOtp?handleverifyOtp:handlEmailAuth : handleLogin}
                    >
                      {showotpinput ? sendOtp?"VERIFY OTP":"Send Otp" : "LOGIN"}
                    </button>
                  </div>
                  <div className="crct-accnt">
                    <p>
                      or{" "}
                      <a
                        onClick={() => {
                          ShowOtpFileds();
                        }}
                      >
                        {" "}
                        {showotpinput
                          ? "login to your account with email"
                          : "login to your account with otp"}
                      </a>
                    </p>
                  </div>
                </form>
              )}

              <div className="login-policy">
                <p>
                  By clicking on Login, I accept the <a>Terms & Conditions </a>&{" "}
                  <a>Privacy Policy</a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

// import React, { useState } from "react";
// import "./LoginPage.css";
// import { RxCross1 } from "react-icons/rx";
// import { IoHomeOutline } from "react-icons/io5";
// import { MdOutlineWorkOutline } from "react-icons/md";
// import { CiLocationOn } from "react-icons/ci";
// import LoginImg from "../../../assets/login.avif";
// import SignUpPage from "./SignPage";
// import { useNavigate } from "react-router-dom";

// function LoginPage({ handleLoginPopUpClose }) {
//   const [showSignUp , setShowSignUp] = useState(false)
//   const [email,setEmail] = useState("")
//   const [password,setPassword] = useState("")
//   const [showotpinput, setShowotpinput]=useState(false)
//   const [otp, setOtp]=useState("")

//   const navigate =useNavigate()

//   const handleSignIn =()=>{
//    setShowSignUp(!showSignUp)
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const loginData = {
//       email,
//       password
//     };

//     try {

//       const loginResponse = await fetch(' https://gourmet-deployment.onrender.com/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (loginResponse.ok) {

//         const authMailData = { email };
//         const authMailResponse = await fetch(' https://gourmet-deployment.onrender.com/user/authmail', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(authMailData),
//         });

//         if (authMailResponse.ok) {
//            setShowotpinput(true)
//         } else {

//         }
//       } else {

//         throw("error found")
//       }
//     } catch (error) {

//     }
//   };

//   const handleverifyOtp=async(e)=>{
//     e.preventDefault();

//     const userverifyData = {
//       email,
//       otp
//     };

//     try {

//       const VerifyResponse = await fetch(' https://gourmet-deployment.onrender.com/user/verify-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userverifyData),
//       });

//       if (VerifyResponse.ok) {
//           navigate("/profile")
//       } else {

//         throw("error found")
//       }
//     } catch (error) {

//       throw(error)
//     }
//   }
//   return (
//     <>
//       <div className="login-container" >
//         <div className=" login-main">
//           <div className="hd-box-login">
//             <div className="login-hd">
//               <div
//                 onClick={() => {
//                   handleLoginPopUpClose();
//                 }}
//               >
//                 <RxCross1 />
//               </div>

//               <h1>{showSignUp? "Sign Up" :"Login"}</h1>
//             </div>
//             <div className="crct-accnt">
//               <p>
//                 or  <a onClick={()=>{handleSignIn() }}>{showSignUp? "login to your account" :"Creact an account"}</a>
//               </p>
//             </div>
//             <div className="logim-img">
//               <img src={LoginImg} />
//             </div>
//           </div>
//           <hr className="hr" />
//           <div className=" login-form">
//             <div>
//             {showSignUp ?  <SignUpPage/> :
//             <form onSubmit={showotpinput?handleverifyOtp:handleLogin}>
//                {showotpinput?<div className="forn-input">
//                <input placeholder="ENTER OTP" type="text" required onChange={(e)=>{setOtp(e.target.value)}}/>
//              </div>
//                :<div>
//                   <div className="forn-input">
//                     <input placeholder="Email" type="email" required onChange={(e)=>{setEmail(e.target.value)}}/>
//                   </div>
//                   <div className="forn-input">
//                     <input placeholder="Password" type="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
//                   </div>
//                 </div>}
//                 <div>
//                   <button type="Submit" className="sumt-btn">{showotpinput?"VERIFY OTP":"LOGIN"}</button>
//                 </div>

//               </form> }

//               <div className="crct-accnt">
//               <p>
//                 or  <a>  login to your account with otp</a>
//               </p>
//             </div>

//               <div className="login-policy">
//                   <p>By clicking on Login, I accept the <a>Terms & Conditions </a>& <a>Privacy Policy</a> </p>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// }

// export default LoginPage;
