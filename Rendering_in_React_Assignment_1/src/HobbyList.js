import React from "react";
import "./HobbyList.css";

function HobbyList({hobbies}) {
  if(!hobbies.length) return null;
  const list = hobbies.map((hobby, index)=>(<li key={index}>{hobby}</li>));
  
  return (
    <div>
      <h4>Hobbies</h4>
      <ul>{list}</ul>
    </div>
  );
}

export default HobbyList;
