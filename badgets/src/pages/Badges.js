import React from "react";

import "./styles/Badges.css";
import ConfLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import { Link } from "react-router-dom";

import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  // constructor(props) {
  //   super(props);
  //   console.log("1. constructor()");

  //   this.state = {
  //     data: [],
  //   };
  // }

  // componentDidMount() {
  //   console.log("3. componentDidMount()");

  //   this.timeputId = setTimeout(() => {
  //     this.setState({
  //       loading: true,
  //       error: null,
  //       data: undefined,
  //     });
  //   }, 3000);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("5. componentDidUpdate()");
  //   console.log({
  //     prevProps: prevProps,
  //     prevState: prevState,
  //   });

  //   console.log({
  //     props: this.props,
  //     state: this.state,
  //   });
  // }

  // componentWillUnmount() {
  //   console.log("6. componentWillUnmount()");
  //   clearTimeout(this.timeputId);
  // }

  render() {
    // console.log("2/4. render()");

    if (this.state.loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={ConfLogo}
                alt="Conf logo"
              ></img>
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <BadgesList badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
