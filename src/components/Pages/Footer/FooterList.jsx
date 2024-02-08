import React from "react";



function FooterList({list}) {
   
  
    return (
      <>
     <div>
        <h1 className="list-hd">{list. heading}</h1>
        <ul className="lists">
            {list.list.map((item,i)=>(
                <li key={i}>
                    <p className="list-item">
                    {item}</p></li>
            ))}
        </ul>
     </div>
       
      </>
    )
  }
  
  export default FooterList;