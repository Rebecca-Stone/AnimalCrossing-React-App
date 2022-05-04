import React from "react";
import "../App.css";
import { AnimalPhoto } from "./AnimalPhoto";
import { AnimalCards } from "./AnimalCards";

export function AnimalList(props) {
  let {
    bubbleColor,
    color,
    photo,
    name,
    gender,
    birthday,
    hobby,
    personality,
    catchphrase,
    saying,
  } = props;

  return (
    <div
      className="container"
      style={{ color: color, backgroundColor: bubbleColor }}
    >
      <AnimalPhoto photo={photo} />
      <AnimalCards
        name={name}
        gender={gender}
        birthday={birthday}
        hobby={hobby}
        personality={personality}
        catchphrase={catchphrase}
        saying={saying}
      />
    </div>
  );
}
