import React, { useState } from "react";
import axios from "axios";
import img1 from "../../assets/offer-img-1.avif";
import img2 from "../../assets/offer-img-2.avif";
import img3 from "../../assets/offer-img-3.avif";
import img4 from "../../assets/offer-img-4.avif";
import pizza from "../../assets/Pizza.avif";
import juice from "../../assets/Juice.avif";
import Pasta from "../../assets/Pasta.avif";
import Rolls from "../../assets/Rolls.jpg";
import Biryani from "../../assets/Biryani.jpg";
import Burger from "../../assets/Burger.jpg";
import Sandwich from "../../assets/Sandwich.jpg";
import restntImg1 from "../../assets/resturent-img-1.avif";
import restntImg2 from "../../assets/resturent-img-2.avif";
import restntImg3 from "../../assets/resturent-img-3.avif";
import restntImg4 from "../../assets/resturent-img-4.avif";
import restntImg5 from "../../assets/resturent-img-5.avif";
import CardImgPizza from "../../assets/coffee.jpg";
import CardImgCoffee from "../../assets/coffee.jpg";

export const AuthContext = React.createContext();

const AuthDataProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: 575654542,
    DOB: "1997-03-20",
    otp: 1234,
    system_otp: 1234,
    device_token: "fd5645",
    device_type: 1,

    address: "vbvbcvb",
    lat: 54654,
    lng: 124,
    country: "India",
  });

  const [authLogin, setAuthLogin] = useState({
    email: "",
    password: "",
    device_type: 1,
    device_token: "46|fWufhiKBgR8osncNlxt7FcwloQevPqOMQO1FzN1O",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setAuthLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    //console.log(value)h
  };

  const submit = async (e) => {
    e.preventDefault();
    const formVal = new FormData();
    formVal.append("first_name", authUser.first_name);
    formVal.append(" last_name", authUser.last_name);
    formVal.append("email", authUser.email);
    formVal.append("password", authUser.password);
    formVal.append(" phone", authUser.phone);
    formVal.append(" DOB", authUser.DOB);
    formVal.append(" otp", authUser.otp);
    formVal.append(" system_otp", authUser.system_otp);
    formVal.append("device_token", authUser.device_token);
    formVal.append("device_type", authUser.device_type);
    formVal.append("address", authUser.address);
    formVal.append(" lat", authUser.lat);
    formVal.append("lng", authUser.lng);
    formVal.append(" country", authUser.country);

    const res = await axios.post(
      "https://kiimochi.codemeg.com/api/user/matchOtp",
      formVal
    );
    console.log(res);
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    const formVal = new FormData();
    formVal.append("email", authLogin.email);
    formVal.append("password", authLogin.password);
    formVal.append("device_token", authLogin.device_token);
    formVal.append("device_type", authLogin.device_type);

    const res = await axios.post(
      "https://kiimochi.codemeg.com/api/user/login",
      formVal
    );
    console.log(res);
    console.log(res.data);
    console.log(res.data.token);
    const token = res.data.token;

    localStorage.setItem("token", token);
  };

  const check = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token && token !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const checker = check();
  console.log(checker, "checker");

  // slider Data....
  const objOffer = {
    imgarr: [
      { img: img1, alt: "Offer Image 1" },
      { img: img2, alt: "Offer Image 2" },
      { img: img3, alt: "Offer Image 3" },
      { img: img4, alt: "Offer Image 4" },
    ],

    width: "27rem",
    heading: "Best offers for you",
  };

  const objFoodVarity = {
    imgarr: [
      { id: 1, img: pizza, alt: "Offer Image 1" },
      { id: 2, img: juice, alt: "Offer Image 2" },
      { id: 3, img: Pasta, alt: "Offer Image 3" },
      { id: 4, img: Rolls, alt: "Offer Image 4" },
      { id: 5, img: Biryani, alt: "Offer Image 4" },
      { id: 6, img: Burger, alt: "Offer Image 4" },
      { id: 7, img: Sandwich, alt: "Offer Image 4" },
      { id: 8, img: Rolls, alt: "Offer Image 4" },
      { id: 9, img: Biryani, alt: "Offer Image 4" },
      { id: 10, img: Burger, alt: "Offer Image 4" },
      { id: 11, img: Sandwich, alt: "Offer Image 4" },
    ],

    width: "10rem",
    heading: `${checker ? authUser.first_name : ""}what's on your mind?`,
  };

  const CardData = {
    imgarr: [
      {
        id: 1,
        img: restntImg1,
        alt: "Offer Image 1",
        offer: "ITEM AT 179",
        star: "5",
        time: "13 min",
        address: "lIG sqr thana , amul Nagar , Indore",
        RestName: "Pizza Hat",
        distance: "1.4km",
        filterData: "Pizza",
        ratingCount: "1k",
        menu: [
          {
            foodItem: "Mexican Fiesta",
            imgCard: CardImgPizza,
            price: 236,
            descrption:
              "Serves 1 | Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice sprinkle & our flavourful pan sauce",
          },
          {
            foodItem: "Corn & Cheese",
            imgCard: CardImgPizza,
            price: 136,
            descrption:
              "Serves 1 | A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce",
          },
          {
            foodItem: "Margherita",
            imgCard: CardImgPizza,
            price: 169,
            descrption:
              "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there",
          },
          {
            foodItem: "Tandoori Paneer",
            imgCard: CardImgPizza,
            price: 169,
            descrption:
              "Serves 1 | It's our signature. Spiced Paneer, Crunchy Onions & Green Capsicum, spicy Red Paprika with delicious Tandoori Sauce and 100% mozzarella cheese!",
          },
        ],
        CouponCard:[
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          },
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          }
        ]
      },
      {
        id: 2,
        img: restntImg2,
        alt: "Offer Image 2",
        offer: "ITEM AT 179",
        star: "4.2",
        time: "13 min",
        address: "lIG sqr thana , amul Nagar , Indore",
        RestName: "Idli & More",
        distance: "1.4km",
        filterData: "Pizza",
        ratingCount: "1k",
        menu: [
          {
            foodItem: "Mexican Fiesta",
            imgCard: CardImgPizza,
            price: 236,
            descrption:
              "Serves 1 | Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice sprinkle & our flavourful pan sauce",
          },
          {
            foodItem: "Corn & Cheese",
            imgCard: CardImgPizza,
            price: 136,
            descrption:
              "Serves 1 | A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce",
          },
          {
            foodItem: "Margherita",
            imgCard: CardImgPizza,
            price: 169,
            descrption:
              "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there",
          },
          {
            foodItem: "Tandoori Paneer",
            imgCard: CardImgPizza,
            price: 169,
            descrption:
              "Serves 1 | It's our signature. Spiced Paneer, Crunchy Onions & Green Capsicum, spicy Red Paprika with delicious Tandoori Sauce and 100% mozzarella cheese!",
          },
        ],
        CouponCard:[
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          },
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          }
        ]
      },
      {
        id: 3,
        img: restntImg3,
        alt: "Offer Image 3",
        offer: "ITEM AT 179",
        star: "3",
        time: "13 min",
        address: "lIG sqr thana , amul Nagar , Indore",
        RestName: "Pizza Hat",
        distance: "1.4km",
        filterData: "Pizza",
        ratingCount: "1k",
        menu: [
          {
            foodItem: "Picco Latte",
            imgCard: CardImgCoffee,
            price: 136,
            descrption:
              "ntroducing the new small size from Starbucks - Picco Caffe Latte Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk forward warm up. Hot - Picco (180ml) - 75.6 kcal Allergen - Contains Milk An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.",
          },
          {
            foodItem: "Corn & Cheese",
            imgCard: CardImgCoffee,
            price: 136,
            descrption:
              "Serves 1 | A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce",
          },
          {
            foodItem: "Margherita",
            imgCard: CardImgCoffee,
            price: 169,
            descrption:
              "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there",
          },
          {
            foodItem: "Tandoori Paneer",
            imgCard: CardImgCoffee,
            price: 169,
            descrption:
              "Serves 1 | It's our signature. Spiced Paneer, Crunchy Onions & Green Capsicum, spicy Red Paprika with delicious Tandoori Sauce and 100% mozzarella cheese!",
          },
        ],
        CouponCard:[
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          },
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          }
        ]
      },
      {
        id: 4,
        img: restntImg4,
        alt: "Offer Image 4",
        offer: "ITEM AT 179",
        star: "2.9",
        time: "13 min",
        address: "lIG sqr thana , amul Nagar , Indore",
        RestName: "Pizza Hat",
        distance: "1.4km",
        filterData: "Pizza",
        ratingCount: "1k",
        menu: [
          {
            foodItem: "Picco Latte",
            imgCard: CardImgCoffee,
            price: 136,
            descrption:
              "ntroducing the new small size from Starbucks - Picco Caffe Latte Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk forward warm up. Hot - Picco (180ml) - 75.6 kcal Allergen - Contains Milk An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.",
          },
          {
            foodItem: "Corn & Cheese",
            imgCard: CardImgCoffee,
            price: 136,
            descrption:
              "Serves 1 | A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce",
          },
          {
            foodItem: "Margherita",
            imgCard: CardImgCoffee,
            price: 169,
            descrption:
              "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there",
          },
          {
            foodItem: "Tandoori Paneer",
            imgCard: CardImgCoffee,
            price: 169,
            descrption:
              "Serves 1 | It's our signature. Spiced Paneer, Crunchy Onions & Green Capsicum, spicy Red Paprika with delicious Tandoori Sauce and 100% mozzarella cheese!",
          },
        ],
        CouponCard:[
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          },
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          }
        ]
      },
      {
        id: 5,
        img: restntImg5,
        alt: "Offer Image 4",
        offer: "ITEM AT 179",
        star: "4",
        time: "13 min",
        address: "lIG sqr thana , amul Nagar , Indore",
        RestName: "Pizza Hat",
        distance: "1.4km",
        filterData: "Pizza",
        ratingCount: "1k",
        menu: [
          {
            foodItem: "Picco Latte",
            imgCard: CardImgCoffee,
            price: 136,
            descrption:
              "ntroducing the new small size from Starbucks - Picco Caffe Latte Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk forward warm up. Hot - Picco (180ml) - 75.6 kcal Allergen - Contains Milk An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.",
          },
          {
            foodItem: "Corn & Cheese",
            imgCard: CardImgCoffee,
            price: 136,
            descrption:
              "Serves 1 | A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce",
          },
          {
            foodItem: "Margherita",
            imgCard: CardImgCoffee,
            price: 169,
            descrption:
              "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there",
          },
          {
            foodItem: "Tandoori Paneer",
            imgCard: CardImgCoffee,
            price: 169,
            descrption:
              "Serves 1 | It's our signature. Spiced Paneer, Crunchy Onions & Green Capsicum, spicy Red Paprika with delicious Tandoori Sauce and 100% mozzarella cheese!",
          },
        ],
        CouponCard:[
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          },
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          }
        ]
      },
      {
        id: 6,
        img: restntImg1,
        alt: "Offer Image 1",
        offer: "ITEM AT 179",
        star: "5",
        time: "13 min",
        address: "lIG sqr thana , amul Nagar , Indore",
        RestName: "Pizza Hat",
        distance: "1.4km",
        filterData: "Pizza",
        ratingCount: "1k",
        menu: [
          {
            foodItem: "Picco Latte",
            imgCard: CardImgCoffee,
            price: 136,
            descrption:
              "ntroducing the new small size from Starbucks - Picco Caffe Latte Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk forward warm up. Hot - Picco (180ml) - 75.6 kcal Allergen - Contains Milk An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.",
          },
          {
            foodItem: "Corn & Cheese",
            imgCard: CardImgCoffee,
            price: 136,
            descrption:
              "Serves 1 | A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce",
          },
          {
            foodItem: "Margherita",
            imgCard: CardImgCoffee,
            price: 169,
            descrption:
              "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there",
          },
          {
            foodItem: "Tandoori Paneer",
            imgCard: CardImgCoffee,
            price: 169,
            descrption:
              "Serves 1 | It's our signature. Spiced Paneer, Crunchy Onions & Green Capsicum, spicy Red Paprika with delicious Tandoori Sauce and 100% mozzarella cheese!",
          },
        ],
        CouponCard:[
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          },
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          }
        ]
      },
      {
        id: 7,
        img: restntImg2,
        alt: "Offer Image 2",
        offer: "ITEM AT 179",
        star: "4.6",
        time: "13 min",
        address: "lIG sqr thana , amul Nagar , Indore",
        RestName: "Pizza Hat",
        filterData: "Pizza",
        ratingCount: "1k",
        menu: [
          {
            foodItem: "Picco Latte",
            imgCard: CardImgCoffee,
            price: 136,
            descrption:
              "ntroducing the new small size from Starbucks - Picco Caffe Latte Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk forward warm up. Hot - Picco (180ml) - 75.6 kcal Allergen - Contains Milk An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.",
          },
          {
            foodItem: "Corn & Cheese",
            imgCard: CardImgCoffee,
            price: 136,
            descrption:
              "Serves 1 | A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce",
          },
          {
            foodItem: "Margherita",
            imgCard: CardImgCoffee,
            price: 169,
            descrption:
              "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there",
          },
          {
            foodItem: "Tandoori Paneer",
            imgCard: CardImgCoffee,
            price: 169,
            descrption:
              "Serves 1 | It's our signature. Spiced Paneer, Crunchy Onions & Green Capsicum, spicy Red Paprika with delicious Tandoori Sauce and 100% mozzarella cheese!",
          },
        ],
        CouponCard:[
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          },
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          }
        ]
      },
      {
        id: 8,
        img: restntImg3,
        alt: "Offer Image 3",
        offer: "ITEM AT 179",
        star: "5",
        time: "13 min",
        address: "lIG sqr thana , amul Nagar , Indore",
        RestName: "Pizza Hat",
        filterData: "Pizza",
        ratingCount: "2k",
        menu: [
          {
            foodItem: "Picco Latte",
            imgCard: CardImgCoffee,
            price: 136,
            descrption:
              "ntroducing the new small size from Starbucks - Picco Caffe Latte Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk forward warm up. Hot - Picco (180ml) - 75.6 kcal Allergen - Contains Milk An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.",
          },
          {
            foodItem: "Corn & Cheese",
            imgCard: CardImgCoffee,
            price: 136,
            descrption:
              "Serves 1 | A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce",
          },
          {
            foodItem: "Margherita",
            imgCard: CardImgCoffee,
            price: 169,
            descrption:
              "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there",
          },
          {
            foodItem: "Tandoori Paneer",
            imgCard: CardImgCoffee,
            price: 169,
            descrption:
              "Serves 1 | It's our signature. Spiced Paneer, Crunchy Onions & Green Capsicum, spicy Red Paprika with delicious Tandoori Sauce and 100% mozzarella cheese!",
          },
        ],
        CouponCard:[
          {
            couponHd:"Flat ₹120 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"AXIS120",
            TermConditions:""
          },
          {
            couponHd:"Flat ₹100 Off",
            couponSubHd:"Get flat ₹120 discount using Axis Bank MY ZONE Credit Cards",
            code:"Online120",
            TermConditions:""
          }
        ]
      },
    ],

    width: "17rem",
    heading: "Best offers for you",
    height: "12rem",

    card: true,
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        handleChange,
        submit,
        authLogin,
        setAuthLogin,
        handleChangeLogin,
        submitLogin,
        checker,
        objOffer,
        objFoodVarity,
        CardData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthDataProvider;
