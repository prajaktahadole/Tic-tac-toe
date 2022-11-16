import './App.css'
import React from "react";

function SingleBlock({ clickedArray, handleClick }) {

  return (
    <div className="board">

      {clickedArray.map((item, index) => {
 
        if (item === "") 
        {
          return (
            <div
              key={index}
              className="block"
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          );
        } 
        else {
          return (
            <div key={index} className="block clicked">
              {item}
            </div>
          );
        }
      })}
    </div>
  );
}

export default SingleBlock;