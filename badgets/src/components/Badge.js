import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Imagen de la conferencia"></img>
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://avatars2.githubusercontent.com/u/11394398?s=400&u=ac26727749edee2cc3424428cbaaa5e67819f9fa&v=4"
            alt="Avatar"
          ></img>
          <h1>
            Daniel <br />
            Romero
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Agilista</h3>
          <div>@leolplex</div>
        </div>

        <div className="Badge__footer">#plexconf</div>
      </div>
    );
  }
}

export default Badge;
