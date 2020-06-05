import React from "react";

import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Imagen de la conferencia"></img>
        </div>
        <div>
          <img
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          ></img>
          <h1>
            Daniel <br />
            Romero
          </h1>
        </div>

        <div>
          <p>Agilista</p>
          <p>@leolplex</p>
        </div>

        <div>#plexconf</div>
      </div>
    );
  }
}

export default Badge;
