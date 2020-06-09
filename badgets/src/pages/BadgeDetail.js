import React from "react";

import "./styles/BadgeDetails.css";
import platziconfLogoImage from "../images/platziconf-logo.svg";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import Badge from "../components/Badge";
import api from "../api";
import { Link } from "react-router-dom";

class BadgeDetail extends React.Component {
  state = {
    loading: true,
    errror: null,
    data: undefined,
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    const badge = this.state.data;

    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  src={platziconfLogoImage}
                  alt="Logo de la conferencia"
                ></img>
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
              <h2>Actiones</h2>
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
}

export default BadgeDetail;
