import React from 'react';

import './styles/BadgeDetails.css';
import Badge from '../components/Badge';
import platziconfLogoImage from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}

function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(4);
  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={platziconfLogoImage} alt="Logo de la conferencia" />
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
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="btn btn-primary mr-4"
                >
                  Incrementar contador: {count}
                </button>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Editar
                </Link>
              </div>
            </div>

            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Eliminar
              </button>
              <DeleteBadgeModal
                isOpen={props.isOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BadgeDetails;
