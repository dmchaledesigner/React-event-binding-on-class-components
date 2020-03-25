import React from "react";

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome Visitor"
    };

    this.changeText = this.changeText.bind(this);
  }

  changeText() {
    this.setState(prevState => {
      return {
        message: "Thank you for subscribing"
      };
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.changeText}>Subscribe here</button>
      </div>
    );
  }
}

export default Subscribe;
