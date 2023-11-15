import React from 'react';
import "./Slide.css";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState, useEffect } from 'react';
import axios from "axios";

export const Slide = (props) => {
  const [data, setData] = useState([]);



  useEffect(() => {
    axios
      .get("http://localhost:5000/TendingNow")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    props.arr.forEach((i)=>{
      data.unshift(i)
    })
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="content">
    <h1 className="header">Trending Now</h1>
    <div className="container">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} onClick={()=>props.clickMovies(item)}>
            <img  src={require(`../../assets/${item.CoverImage}`)} alt={item.alt} className="img" />
          </div>
        ))}
      </Slider>
    </div>
  </div>
  )
}
