import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const styles = {
    backgroundColor: "red",
    width: "200px",
    height: "40px"
  };

  const stylesimages = {
    width: "200px",
    height: "200px"
  };
  const [data, setData] = useState([]);

  useEffect(getProducts, []);
  function getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((imagedata) => {
        setData(imagedata);
      });
  }
  const dataimage = data.map((el) => {
    return <img src={`${el.image}`} style={stylesimages} />;
  });
  console.log(dataimage);
  return <div className="App">{dataimage}</div>;
}
