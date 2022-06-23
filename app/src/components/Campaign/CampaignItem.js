import React from "react";

import linkImg from "static/link.svg";
import downloadImg from "static/download.svg";
import playIcon from "static/play.svg";

import "./Campaign.css";

export default function CampaignItem({ item }) {
  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    alert("Link copied to your clipboard!");
  };

  return (
    <>
      <div className="descriptionContainer">
        <img
          src={item.campaign_icon_url}
          alt={`${item.campaign_name}`}
          className="icon"
        />
        <div className="description">
          <span className="name">{item.campaign_name}</span>
          <span className="preInstall">
            <b>{item.pay_per_install}</b> pre install
          </span>
        </div>
      </div>
      <div className="mediaContainer">
        {item.medias.map((media, idx) => (
          <div key={idx} className="mediaItem">
            <img src={media.cover_photo_url} alt="media" className="coverPic" />
            {media.media_type === "video" && (
              <div className="mediaBackdrop">
                <img src={playIcon} alt="Play button" className="playIcon" />
              </div>
            )}
            <div className="btnGroup">
              <div
                className="btn"
                onClick={() => handleCopy(media.tracking_link)}
              >
                <img src={linkImg} alt="Link button" />
              </div>
              <a href={media.download_url} download>
                <div className="btn">
                  <img src={downloadImg} alt="Download button" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
