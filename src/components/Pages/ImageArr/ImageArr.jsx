import React from "react";
import "./ImageArr.css"

function ImageArr ({item ,id,style}){
    return(
        <>
         <div
                  className="imgBox"
                  key={id}
                  style={style}
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    // className={slideImg ? "add" : ""}
                  />
                </div>
        </>
    )
}

export default ImageArr;