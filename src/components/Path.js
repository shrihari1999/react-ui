import React from 'react';
import '../App.css';

class Path extends React.Component {

  constructor(){
    super()
    this.state={
      group:'',
      name:''
    }
  }

  componentDidMount(){
    this.setState({
      group:this.props.group,
      name:this.props.name
    })
  }

  render(){
    return (
      <div className="pathcontainer">
        <div className="grouplabel"> {this.state.group} </div >
        <div className="patharrow"></div>
        <div className="pathlabel">Layout 1    [{this.state.name}]</div>
      </div>
    );
  }
}


export default Path;
