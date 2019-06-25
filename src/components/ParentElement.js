import React from 'react';
import '../App.css';

export class ParentElement extends React.Component {

  selectCorrect=false;

  constructor(){
    super()
    this.state={
      orientation:''
    }
    this.callFunc=this.callFunc.bind(this);
    this.onSelect=this.onSelect.bind(this);
  }

  onSelect(){
    if(!this.selectCorrect){
      this.props.changeSelect(this.props.id);
    }
    this.selectCorrect=false;
  }

  callFunc(){
    this.state.orientation==='' ? this.setState({orientation:'down'}):this.setState({orientation:''});
    this.selectCorrect=true;
    this.props.func();
  }

  render(){
    return (
      <div>
        <div className={['element',this.props.selected].join(' ')} onClick={this.onSelect}>
          <div className={['dropicon',this.state.orientation].join(' ')} onClick={this.callFunc}></div>
          <div className="label parentLabel">{this.props.treeLabel}</div>
          <div className={this.props.selected==='' ? '':'circlecross'}></div>
        </div>
      </div>
    );
  }
}
