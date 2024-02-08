import CreateAccount from "./components/Auth/CreateAccount";
import Login from "./components/Auth/LoginPage";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import SearchPage from "./components/Pages/Search/Search";
import Footer from "./components/Pages/Footer/Footer";
import ProductDetails from "./components/Pages/productDetails/ProductDetails";
import RestaurantsCard from "./components/Pages/RestaurantsCard/RestaurantsCard";
import OfferPage from "./components/Pages/OfferPage/OfferPage";
import CartPage from "./components/Pages/CartPage/CartPage";
import LoginPage from "./components/Pages/AuthPages/LoginPage";
import PastOrdersComponent from "./components/Pages/ProfilePage/PastOrdersComponent";
import HelpPage from "./components/Pages/HelpPage/HelpPage";
import HomePage from "./components/Pages/HomePage/HomePage"


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
         
          <Routes>
            {/* <Route path="/" element={<Product/>}/> */}

            {/* <Route path="/sign" element={<Login/>}/> */}
           
            <Route path="/" element={<HomePage />} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/Product/:id" element={<ProductDetails/>}/> 
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/offer" element={<OfferPage/>}/>
            <Route path="/card" element={<CartPage/>}/>
            <Route path="/profile" element={<PastOrdersComponent/>}/>
            <Route path="/help" element={<HelpPage/>}/>
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
      </div>
    </>

    // <AuthDataProvider>
    //   <CreateAccount/>
    // </AuthDataProvider>
    // <>
    // <CreateAccount/>
    // <Login/>
    // <NavBar/>
    //  </>
  );
}

export default App;
