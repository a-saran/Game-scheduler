import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, FieldArray } from "formik";
import { object, array, string } from "yup";

import "./style.scss";

class TeamDetails extends Component {
  state = {
    teamsReady: 0,
  };
  addPlayer = () => ({ name: "", data: [] });

  onSubmitTeam1 = (values, { resetForm }) => {
    console.log(values);
    this.setState(prev => ({ teamsReady: prev.teamsReady + 1 }));
    resetForm(values);
    if (this.state.teamsReady >= 2) {
      this.props.history.push("/");
    }
  };

  onSubmitTeam2 = (values, { resetForm }) => {
    console.log(values);
    this.setState(prev => ({ teamsReady: prev.teamsReady + 1 }));
    resetForm(values);
    if (this.state.teamsReady >= 2) {
      this.props.history.push("/");
    }
  };

  renderForm = teamName => {
    const { team1 } = this.props;
    return (
      <Formik
        initialValues={{ name: [this.addPlayer()] }}
        validationSchema={object().shape({
          name: array().of(
            object().shape({
              name: string().required("req name"),
            }),
          ),
        })}
        onSubmit={team1 === teamName ? this.onSubmitTeam1 : this.onSubmitTeam2}
      >
        {({
          values,
          touched,
          errors,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="add-form-container">
            <br />
            <FieldArray
              name="name"
              render={arrayHelpers => (
                <div>
                  {values.name.map((data, index) => (
                    <div key={index}>
                      <input
                        type="name"
                        name={`name.${index}.name`}
                        placeholder="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={data.name}
                      />
                      {errors.emails && errors.emails[index] && (
                        <p>{errors.name[index].name}</p>
                      )}
                    </div>
                  ))}
                  {values.name.length < 10 && (
                    <p
                      onClick={() => arrayHelpers.push(this.addPlayer())}
                      className="add-btn"
                    >
                      Add another ?
                    </p>
                  )}
                </div>
              )}
            />
            <input
              type="submit"
              className="btn"
              value="Send"
              disabled={!isValid || values.name.length === 0}
            />
          </form>
        )}
      </Formik>
    );
  };

  render() {
    const { team1, team2 } = this.props;

    return (
      <div className="team-details-container">
        <h1>Team-details</h1>
        <div className="teams">
          <div className="team-1">
            <div className="team-title">
              <h1>{team1}</h1>
            </div>
            {this.renderForm(team1)}
          </div>
          <div className="team-2">
            <div className="team-title">
              <h1>{team2}</h1>
            </div>
            {this.renderForm(team2)}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  team: { team1, team1Players, team2, team2Players },
}) => ({
  team1,
  team1Players,
  team2,
  team2Players,
});

export default connect(mapStateToProps)(TeamDetails);
