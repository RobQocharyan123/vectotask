import React, { useState } from "react";

import "./Menu.css";

export const Menu = () => {
  const [active,setActive] = useState(false);

  const onActive = ()=>{
    setActive(true)
  }
  return (
    <div className="menu">
      <nav>
        <ul>
          <li>
            <div className={active?'activeLi icons':'icons'}>
              <div className="radius" onClick={onActive}>
                <img src={require("../../assets/icons/search.png")} alt="" />
              </div>

              <a to={'/home'} className={active?'active':''} href="#">Search</a>
            </div>
          </li>
          <li>
            <div className={active?'activeLi icons':'icons'}>
              <div className="radius" onClick={onActive}>
                <img src={require("../../assets/icons/house.png")} alt="" />
              </div>

              <a className={active?'active':''} href="#">Home</a>
            </div>
          </li>
          <li>
            <div className={active?'activeLi icons':'icons'}>
              <div className="radius" onClick={onActive}>
                <img src={require("../../assets/icons/video.png")} alt="" />
              </div>

              <a className={active?'active':''} href="#">TV Shows</a>
            </div>
          </li>
          <li>
            <div className={active?'activeLi icons':'icons'}>
              <div className="radius" onClick={onActive}>
                <img src={require("../../assets/icons/movies.png")} alt="" />
              </div>

              <a className={active?'active':''} href="#">Movies</a>
            </div>
          </li>
          <li>
            <div className={active?'activeLi icons':'icons'}>
              <div className="radius" onClick={onActive}>
                <img src={require("../../assets/icons/genres.png")} alt="" />
              </div>

              <a className={active?'active':''} href="#">Genres</a>
            </div>
          </li>
          <li>
            <div className={active?'activeLi icons':'icons'}>
              <div className="radius" onClick={onActive}>
                <img
                  src={require("../../assets/icons/watchlater.png")}
                  alt=""
                />
              </div>

              <a className={active?'active':''} href="#">Watch Later</a>
            </div>
          </li>
          <li className="footer-list" id="list">
            <a className={active?'active':''} href="#">Language</a>
          </li>
          <li className="footer-list">
            <a className={active?'active':''} href="#">Get Help</a>
          </li>
          <li className="footer-list">
            <a className={active?'active':''} href="#">Exit</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
