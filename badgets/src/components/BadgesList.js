import React from "react";

import "./styles/BadgesList.css";
import BadgesListItem from "../components/BadgesListItem";
import { Link } from "react-router-dom";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length > 0) {
      return (
        <div className="BadgesList">
          <ul className="list-unstyled">
            {this.props.badges.map((badge) => {
              return (
                <li key={badge.id}>
                  <BadgesListItem badge={badge} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create a new badge
          </Link>
        </div>
      );
    }
  }
}

export default BadgesList;
