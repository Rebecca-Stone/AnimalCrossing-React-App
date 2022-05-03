import React, { useState, useEffect } from "react";
import axios from "axios";
import { VILLAGERS_URL } from "./constants/index";
import "./App.css";

import { AnimalList } from "./components/AnimalList";
import { Nav } from "./components/Nav.js";

function App() {
  const [data, setData] = useState([]);

  const fetchVillagers = () => {
    axios
      .get(`${VILLAGERS_URL}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchVillagers();
  }, []);

  return (
    <div className="App">
      <Nav className="Nav" />
      <div className="AnimalContainer">
        {data.map((animal) => (
          <AnimalList
            // className="Animal"
            key={animal.id}
            photo={animal.icon_uri}
            id={animal.id}
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
