import React from "react";
import { useEffect, useState } from "react";

import Header from "./components/Header";

import "./App.css";

function App() {
  const [dataArray, setDataArray] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.plugco.in/public/take_home_sample_feed"
        );
        const result = await response.json();
        setDataArray(result.campaigns);
        setErrorMsg(null);
      } catch (err) {
        setErrorMsg("Failed to fetch");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
