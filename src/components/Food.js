import React from "react";
import { Link } from "react-router-dom";
import "./food.css";

export default function Food() {
  return (
    <div className="food_page">
      <div className="one">
        <div className="slogan back-opaque">
          <h1 className="slog_head" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="100">Food is the Key</h1>
          <h2 className="slog_txt" data-aos="fade-left" data-aos-duration="1200" data-aos-offset="100">To your Fitness Goals and Health</h2>
          <i>
            <h1 className="slog_txt myText pt-3" data-aos="fade-right" data-aos-duration="1200" data-aos-offset="100">Choose them wisely</h1>
          </i>
        </div>
      </div>

      <div className="two">
        <div className="categories">
          <div className="proteins">
            <Link
              to={"/category/protein"}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <h1 className="cat-name myText">High Protein Foods</h1>
            </Link>
          </div>

          <div className="carbs">
            <Link
              to={"/category/Carbohydrates"}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <h1 className="cat-name myText">High Carbohydrates foods</h1>
            </Link>
          </div>

          <div className="fats">
            <Link
              to={"/category/fats"}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <h1 className="cat-name myText">High Fats foods</h1>
            </Link>
          </div>

          <div className="fibres">
            <Link to={"/category/fibres"} target="_blank" style={{ textDecoration: "none" }}>
              <h1 className="cat-name myText">High Fibres Foods</h1>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
