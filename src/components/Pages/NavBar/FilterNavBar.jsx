import React from "react";
import "./navbar.css"

function FilterNavBar() {
    const navBarItems = [
        "Filter",
        "sortBy",
        "Fast Delivery",
        "New on Swiggy",
        "Ratings 4.0+",
        "Pure Veg",
        "Offers",
        "RS.300-Rs.600",
        "Less Than Rs.300",
      ];
    
  
    return (
      <>
     <div>
     <div className="navitem">
            <ul className="nav-Filter">
              {navBarItems.map((item, i) => (
                <li key={i}>
                  <div className="Fillter-item">
                    <button>
                      {item}
                      {/* <span>
                        <BsFilter className="filter-icon" />
                      </span> */}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
     </div>
       
      </>
    )
  }
  
  export default FilterNavBar;