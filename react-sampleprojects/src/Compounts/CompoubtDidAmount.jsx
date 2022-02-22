import React, { Component } from 'react'
import "./Cdm.css";
class CompoundDidMount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Change: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({Change: "yellow Its Happened"})
      }, 5000)
    }
    
    render() {
      return (
          <div className='container'>
          <h1 >The ComponentDidMount Will Mount </h1>
        <h2>After Five Seconds from {this.state.Change} = Yellow</h2>
        
        </div>
        
      );
    }
  }
  export default CompoundDidMount;
  
 
