import React, { Component } from 'react'
import "./Scu.css";
class ShouldComponentUpdate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Change: 123};
    }
    shouldComponentUpdate() {
      return true;
    }
    ChangedNumber = () => {
      this.setState({Change: 567});
    }
    render() {
      return (
        <div className="container">
        <h1>shouldComponentUpdate The Number from {this.state.Change} === 567</h1>
        <button type="button" onClick={this.ChangedNumber}>Change Number</button>
        </div>
      );
    }
  }
  export default ShouldComponentUpdate;