import React from "react";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import CampaignList from "./components/Campaign/CampaignList";

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
      <div className="pageContainer">
        <CampaignList data={dataArray} />
      </div>
    </>
  );
}

export default App;
