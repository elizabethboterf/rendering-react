import React from "react";
import "./Header.css";

function Header({name=null, birthday=null, imageSrc=null}) {
  const picture = <img src={imageSrc} alt="profile picture" className="item"/>;
  const person = <h1>{name}</h1>;
  const bday = <h2>{birthday}</h2>;
  return(
    <div className="group">
      {picture}
      <div className="item">
        {name}
        {birthday}
      </div>
    </div>
  );
}

export default Header;
