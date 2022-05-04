import React, { useState, useEffect } from "react";
import { VILLAGERS_URL } from "./constants/index";
import { AnimalList } from "./components/AnimalList";
import { Nav } from "./components/Nav.js";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchVillagers = () => {
    axios
      .get(`${VILLAGERS_URL}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchVillagers();
  }, []);

  return (
    <div className="App">
      <Nav />
      <div className="AnimalContainer">
        {data.map((animal) => (
          <AnimalList
            key={animal.id}
            color={animal["text-color"]}
            bubbleColor={animal["bubble-color"]}
            photo={animal.image_uri}
            name={animal.name["name-USen"]}
            gender={animal.gender}
            birthday={animal["birthday-string"]}
            hobby={animal.hobby}
            personality={animal.personality}
            catchphrase={animal["catch-phrase"]}
            saying={animal.saying}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
