import React from "react";
import "../styles/AnimalList.css";

export function AnimalCards(props) {
  let {
    // name, gender,
    birthday,
    hobby,
    personality,
    catchphrase,
    saying,
  } = props;

  return (
    <>
      <div className="AnimalCard">
        {/* <h2> */}
        {/* Animal Name: {name} ({gender}) */}
        {/* </h2> */}
        <h3>Birthday: {birthday}</h3>
        <h3>Hobby: {hobby}</h3>
        <h3>Personality: {personality}</h3>
        <h3>Catchphrase: {catchphrase}</h3>
        <h3>Saying: {saying}</h3>
      </div>
    </>
  );
}
