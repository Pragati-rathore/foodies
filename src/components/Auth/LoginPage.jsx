import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthData";

const Login = () => {
  const loginData = useContext(AuthContext)

  const {authLogin,setAuthLogin,handleChangeLogin, submitLogin} =loginData
 console.log(authLogin)

//  const submitLogin=async (e)=>{
//   e.preventDefault()
//   const formVal = new FormData()
//   formVal.append("email",authUser.email)
//   formVal.append("password",authUser.password)
//   formVal.append("device_token",authUser.device_token)
//   formVal.append("device_type",authUser.device_type)
  
  
//   const res = await axios.post("https://kiimochi.codemeg.com/api/user/login",formVal)
//   console.log(res)

// }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-8 shadow-md rounded-md" >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Email
          </label>
          <input
            value={authLogin.email}
            type="email"
            id="emaillogin"
            name="email"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            placeholder="Enter your email"
            onChange={(e) => handleChangeLogin(e)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Password
          </label>
          <input
            
            type="password"
            id="passwordlogin"
            name="password"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            placeholder="Enter your password"
            value={authLogin.password}
            onChange={(e) => handleChangeLogin(e)}
          />
        </div>
        {/* <Link to="/sign"> */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            onClick={submitLogin}
          >
            Login
          </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default Login;
