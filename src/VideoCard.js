import React from "react";
import "./VideoCard.css";

const VideoCard = ({ img }) => {
  return (
    <div className="videoCard">
      <img src={img} alt="" />
    </div>
  );
};

export default VideoCard;
