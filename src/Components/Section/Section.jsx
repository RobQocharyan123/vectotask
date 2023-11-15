import React, { useEffect } from "react";
import "./Section.css";
import { useState } from "react";
import axios from "axios";

export const Section = (props) => {
  const [play, setPlay] = useState(false);
  const playVideo = (e) => {
    setPlay(true);
  };


    return (
      <>
      <div className="section">
        {play && (
          <div className="video">
            <video
              src={props.data.VideoUrl}
              width="400"
              height="400"
              controls
            />{" "}
        <button onClick={()=>setPlay(false)}>X</button>

          </div>
        )}
        <div className="first">

          <p className="title">{props.data.Category}</p>
          <img src={require(`../../assets/${props.data.TitleImage}`)} alt="" />
          <div className="time">
            <span>{props.data.Date}</span>
            <span>{props.data.MpaRating}</span>
          </div>
          <p className="description">{props.data.Description}</p>
          <div className="play">
            <button onClick={playVideo}>
              {" "}
              <img src={require("../../assets/icons/play.png")} alt="" /> Play
            </button>
            <button>More Info</button>
          </div>
        </div>
        <div
          className="second"
          style={{
            backgroundImage: `url(${require(`../../assets/${props.data.CoverImage}`)})`,
          }}
        ></div>
      </div>

    
      </>
    );
};
