import React from "react";

class Login extends React.Component {
  state = {
    nameValue: "",
    passwordValue: "",
    permission: false
  };
  handleChangeName = e =>
    this.setState({
      nameValue: e.target.value
    });
  handleChangePass = e => {
    this.setState({
      passwordValue: e.target.value
    });
  };

  render() {
    return (
      <>
        <label htmlFor="name">
          Podaj nazwę:
          <input
            value={this.state.nameValue}
            onChange={this.handleChangeName}
            type="text"
          />
        </label>
        <br />
        <label htmlFor="name">
          Podaj hasło:
          <input
            value={this.state.passwordValue}
            onChange={this.handleChangePass}
            type="password"
          />
        </label>
        <button onClick={this.handleClick}>Zaloguj</button>
      </>
    );
  }
}

export default Login;
