import React from "react";

class Mahi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mahesh",
      age: 28,
    };
  }
  render() {
    return (
      <div>
        <h1>
          Hi, this is "state in class component" {this.state.name} and my age is{" "}
          {this.state.age}
        </h1>
        <h2>
          This is for props {this.props.name} {this.props.surname}
        </h2>
      </div>
    );
  }
}

export default Mahi;
