import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthData";




const CreateAccount = () => {

    const loginData = useContext(AuthContext)

    const {authUser,setAuthUser,handleChange,submit} =loginData
  //console.log(authUser)

  

  // const handlechange=(e)=>{
  //  const {name, value} = e.target
  //  console.log(value)
  

  // }
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setAuthUser((prevData) => ({
  //     ...prevData,
  //     [name]: value,
      
  //   }));
  //   console.log(value)
  // };

  // const submit=async (e)=>{
  //   e.preventDefault()
  //   const formVal = new FormData()
  //   formVal.append("first_name",authUser.first_name)
  //   formVal.append(" last_name",authUser.last_name)
  //   formVal.append("email",authUser.email)
  //   formVal.append("password",authUser.password)
  //   formVal.append(" phone",authUser.phone)
  //   formVal.append(" DOB",authUser. DOB)
  //   formVal.append(" otp",authUser. otp)
  //   formVal.append(" system_otp",authUser.system_otp)
  //   formVal.append("device_token",authUser.device_token)
  //   formVal.append("device_type",authUser.device_type)
  //   formVal.append("address",authUser.address)
  //   formVal.append(" lat",authUser. lat)
  //   formVal.append("lng",authUser.lng)
  //   formVal.append(" country",authUser. country)
    
  //   const res = await axios.post("https://kiimochi.codemeg.com/api/user/matchOtp",formVal)
  //   console.log(res)

  // }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-8 shadow-md rounded-md" >
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label
            htmlFor="FirstName"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            First Name
          </label>
          <input
        
          value={authUser.first_name}
            type="text"
            id="first_name"
            required
            name="first_name"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            placeholder="Enter your First Name"
            // onChange={handlechange}
            onChange={(e) => {
              console.log(e.target.value,"value")
              handleChange(e)}}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="LastName"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Last Name
          </label>
          <input
          
          value={authUser.last_name}
            type="text"
            id="lastName"
            required
            name="last_name"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            placeholder="Enter your Last Name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-4">  
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Email
          </label>
          <input
            
          value={authUser.email}
            type="email"
            id="email"
            required
            name="email"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            placeholder="Enter your email"
            onChange={(e) => handleChange(e)}
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
          value={authUser.password}
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            placeholder="Enter your password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          onClick={submit}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
