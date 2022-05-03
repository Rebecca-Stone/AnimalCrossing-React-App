import React, { useState, useEffect } from "react";
import axios from "axios";
import { VILLAGERS_URL } from "./constants/index";
import "./App.css";

function App() {
  // this contains ALL of villagers information
  const [data, setData] = useState([]);

  const fetchVillagers = () => {
    axios
      .get(`${VILLAGERS_URL}`)
      .then((res) => {
        // console.log("data:", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const createVillagers = () => {
    const allVillagers = [];
    for (let i = 0; i < data.length; i++) {
      allVillagers.push(
        <div key={i}>
          <img src={data[i].icon_uri} alt={data[i].name} />
          <h2>
            Animal Name: {data[i].name["name-USen"]} ({data[i].gender})
          </h2>
          <h3>Birthday: {data[i]["birthday-string"]}</h3>
          <h3>Hobby: {data[i].hobby}</h3>
          <h3>Personality: {data[i].personality}</h3>
          <h3>Catchphrase: {data[i]["catch-phrase"]}</h3>
          <h3>Saying: {data[i].saying}</h3>
        </div>
      );
    }
    return allVillagers;
  };

  useEffect(() => {
    fetchVillagers();
  }, []);

  return (
    <div className="App">
      <div className="Animals">{createVillagers()}</div>
    </div>
  );
}

export default App;
