import React from "react";
import { Route, Redirect } from "react-router-dom";

class Admin extends React.Component {
  state = {
    permission: true
  };

  render() {
    console.log(this.state.permission);
    return (
      <>
        <Route
          render={() =>
            this.state.permission ? (
              <h3>Panel administratora</h3>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <button onClick={() => this.setState({ permission: false })}>
          wyloguj
        </button>
      </>
    );
  }
}

export default Admin;
