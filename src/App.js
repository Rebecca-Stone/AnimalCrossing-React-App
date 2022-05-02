import React, { useState, useEffect } from "react";
import axios from "axios";
import { VILLAGERS_URL } from "./constants/index";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchVillagers = () => {
    axios
      .get(`${VILLAGERS_URL}`)
      .then((res) => {
        console.log("data:", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const createVillagers = () => {
    const villagers = [];

    for (let i = 0; i < data.length; i++) {
      villagers.push(<div key={i}>{data[i].name["name-USen"]}</div>);
      // console.log("villagers name:", data[i].name["name-USen"]);
    }
    // console.log("villagers:", villagers);
    return villagers;
  };

  useEffect(() => {
    fetchVillagers();
  }, []);

  return <div className="App">{createVillagers()}</div>;
}

export default App;
