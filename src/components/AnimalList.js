import React from "react";
import "../styles/AnimalList.css";
import { AnimalPhoto } from "./AnimalPhoto";
import { AnimalCards } from "./AnimalCard";

export function AnimalList(props) {
  let {
    photo,
    id,
    name,
    gender,
    birthday,
    hobby,
    personality,
    catchphrase,
    saying,
  } = props;

  return (
    <div className="container">
      <AnimalPhoto photo={photo} name={name} gender={gender} />
      <AnimalCards
        id={id}
        // name={name}
        // gender={gender}
        birthday={birthday}
        hobby={hobby}
        personality={personality}
        catchphrase={catchphrase}
        saying={saying}
      />
    </div>
  );
}
