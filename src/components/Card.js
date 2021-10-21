import React, { Component } from "react";
import Card from "./CardUi";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import "./styles/card-style.css";

function Cards() {
  return (
    <div className="trainer">
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <h1 className="h1-train">Our Trainers</h1>
          <div className="line"></div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card2 />
          </div>
          <div className="col-md-4">
            <Card3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
