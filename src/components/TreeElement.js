import React from 'react';
import '../App.css';

export class TreeElement extends React.Component {

  endElements=[];
  selectCorrect=false;

  constructor(){
    super()
    this.state={
      orientation:'',
    }
    this.toggleDrop=this.toggleDrop.bind(this);
    this.onSelect=this.onSelect.bind(this);
    this.onChildSelect=this.onChildSelect.bind(this);
  }

  onChildSelect(key){
    this.props.changeSelect(key);
  }

  onSelect(){
    if(!this.selectCorrect){
      this.props.changeSelect(this.props.id);
    }
    this.selectCorrect=false;
  }

  toggleDrop(){
    this.state.orientation==='' ? this.setState({orientation:'down'}):this.setState({orientation:''});
    this.selectCorrect=true;
  }

  render(){
    let i=this.props.id+1;
    this.endElements.splice(0,this.endElements.length);
    if(this.props.endElements){
      this.props.endElements.forEach(element => {
        this.endElements.push(
          <div key={i++} className={['element',this.props.childrenSelected[i-this.props.id-2]].join(' ')} onClick={this.onChildSelect.bind(this,i-1)}>
            <div className="label parentLabel">{element}</div>
            <div className={this.props.childrenSelected[i-this.props.id-2]==='' ? '':'circlecross'}></div>
          </div>
        );
      });
    }
    return (
      <div>
        <div className={['element',this.props.selected].join(' ')} onClick={this.onSelect}>
          <div className={['dropicon',this.state.orientation].join(' ')} onClick={this.toggleDrop}></div>
          <div className="label treeLabel">{this.props.treeLabel}</div>
          <div className={['circle', this.props.id===1 ? 'borderred' : this.props.id===4 ? 'bordergreen': 'borderorange'].join(' ')}></div>
        </div>
        <div className={this.state.orientation==='' ? 'invisible':''}>{this.endElements}</div>
      </div>
    );
  }
}
