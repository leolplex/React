import React from "react";
import ReactDOM from "react-dom";

import "./global.css";
import "bootstrap/dist/css/bootstrap.css";
import Badge from "./components/Badge";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <Badge
    firstName="Daniel"
    lastName="Romero"
    jobTitle="Agilista"
    twitter="leolplex"
    avatarUrl="https://avatars2.githubusercontent.com/u/11394398?s=400&u=ac26727749edee2cc3424428cbaaa5e67819f9fa&v=4"
  />,
  container
);
