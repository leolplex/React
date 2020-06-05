import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"></img>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Daniel"
                lastName="Romero"
                jobTitle="Agilista"
                twitter="leolplex"
                avatarUrl="https://avatars2.githubusercontent.com/u/11394398?s=400&u=ac26727749edee2cc3424428cbaaa5e67819f9fa&v=4"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
