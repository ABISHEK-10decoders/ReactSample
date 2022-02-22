import React, { Component } from 'react'
class Heading extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>The Component Will Remove the DOM</h1>
    );
  }
}
class ComponentWillUnmount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
    delHeader = () => {
      this.setState({show: false});
    }
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <Heading />;
      };
      return (
        <div className="container">
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Component</button>
        </div>
      );
    }
  }
  
  
  export default ComponentWillUnmount;