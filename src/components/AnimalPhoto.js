import React from "react";
import "../styles/AnimalList.css";

export function AnimalPhoto(props) {
  let { photo, name, gender } = props;

  return (
    <div className="AnimalPhoto">
      <img src={photo} alt={name} />
      <h1>
        NAME: {name} ({gender})
      </h1>
    </div>
  );
}
