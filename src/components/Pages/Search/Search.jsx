import React, { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Search.css";
import Heading from "../Heading/Heading";
import Confetti from "react-confetti";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Context/AuthData";
import ImageArr from "../ImageArr/ImageArr";
import { toast, ToastContainer } from "react-toastify";
import NavBar from "../NavBar/NavBar";

function SearchPage() {
  const { objFoodVarity } = useContext(AuthContext);
  const isScrolled= true

  const notify = (text) => {
    toast(text);
  };
  notify("hey...");

  return (
    <>
    <div>
      <NavBar isScrolled={isScrolled}/>
      <div className="Main-container">
        <div className="srch-pg">
          <button onClick={notify}>
            hello
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </button>
          <div className="SearchMain">
            <Confetti />
            <SearchBar />
          </div>
          <div>
            <Heading hding={"Popular Cuisines"} />
          </div>
          <div className="img-Arr">
            {objFoodVarity.imgarr.map((item, id) => (
              <ImageArr
                item={item}
                id={id}
                style={{
                  width: "10rem",
                }}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default SearchPage;
