import "./App.css";
import { Menu } from "./Components/Menu/Menu";
import { Section } from "./Components/Section/Section";
import { Slide } from "./Components/Slide/Slide";
import {useState } from "react";
import axios from "axios";
function App() {
  let arr = JSON.parse(localStorage.getItem("divData")) || [];

  let [data, setData] = useState();
  if (data === undefined) {
    axios
      .get("http://localhost:5000/TendingNow")
      .then((res) => setData(res.data[0]))
      .catch((err) => console.log(err));
  }

  const clickMovies = (e) => {
    setData(e);
    arr.push(e)
    localStorage.setItem("divData", JSON.stringify(arr));

  };
  return (
    <>
      <div className="App">
        <div className="content">
          <Menu />
          {data && <Section data={data} clickMovies={clickMovies}  />}
        </div>
        <Slide clickMovies={clickMovies} arr={arr} />

     
      </div>
    </>
  );
}

export default App;
