import React from "react";

import CampaignItem from "./CampaignItem";

export default function CampaignList({ data }) {
  return (
    <>
      {data.map((item, idx) => (
        <CampaignItem key={idx} item={item} />
      ))}
    </>
  );
}
