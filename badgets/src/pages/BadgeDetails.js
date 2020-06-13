import React from 'react';

import './styles/BadgeDetails.css';
import Badge from '../components/Badge';
import platziconfLogoImage from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={platziconfLogoImage} alt="Logo de la conferencia"></img>
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.fistName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="row">
          <div className="col">
            <Badge
              fistName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
              avatarUrl={badge.avatarUrl}
            />
          </div>
          <div className="col">
            <h2>Acciones</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Editar
                </Link>
              </div>
            </div>

            <div>
              <button className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BadgeDetails;
