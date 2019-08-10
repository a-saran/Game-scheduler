import React, { Component } from "react";
import { connect } from "react-redux";

import { setTeam } from "./../../reducer/actions";

class Team extends Component {
  state = {
    team1: "",
    team1Players: 0,
    team2: "",
    team2Players: 0,
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const { setTeam } = this.props;
    const { team1, team2, team1Players, team2Players } = this.state;
    const details = {
      team1,
      team2,
      team1Players,
      team2Players,
    };
    console.log(details);
    setTeam(details);
    this.props.history.push("/team-details");
  };

  render() {
    const { team1, team2 } = this.state;
    const diasbled = team1.length && team2.length;

    return (
      <div>
        <h1>Schdule a Game</h1>
        <br />
        <div>
          <h2>Team1</h2>
          <input type="text" name="team1" onChange={this.onChange} />
          <input
            type="number"
            max="10"
            name="team1Players"
            min="1"
            placeholder="Number of players"
            onChange={this.onChange}
          />
        </div>
        <div>
          <h2>Team2</h2>
          <input type="text" name="team2" onChange={this.onChange} />
          <input
            type="number"
            max="10"
            name="team2Players"
            min="1"
            placeholder="Number of players"
            onChange={this.onChange}
          />
        </div>
        <br />
        <button disabled={!diasbled} onClick={this.onSubmit}>
          Schedule
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { setTeam },
)(Team);
