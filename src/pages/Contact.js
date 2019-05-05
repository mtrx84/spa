import React from "react";
import { Prompt } from "react-router-dom";
import "../styles/contact.css";

class Contact extends React.Component {
  state = {
    value: ""
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  handleClick = () => {
    this.setState({
      value: ""
    });
  };
  render() {
    return (
      <div className="contact">
        <h3>Napisz do nas!</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Wpisz wiadomość..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Wyślij</button>
          <Prompt
            when={this.state.value.length > 0}
            message="Po opuszczeniu strony wiadomość zostanie usunięta."
          />
        </form>
      </div>
    );
  }
}

export default Contact;
