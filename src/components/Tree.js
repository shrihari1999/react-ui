import React from 'react';
import '../App.css';
import {TreeElement} from './TreeElement';
import {ParentElement} from './ParentElement';

class Tree extends React.Component {

  markers=null;
  fields=null;
  tables=null;
  ignoreChange=false;

  constructor(){
    super()
    this.state={
      orientation:'',
      selected:[]
    }
    this.toggleTreeElements=this.toggleTreeElements.bind(this);
    this.changeSelect=this.changeSelect.bind(this);
    this.treeLoseFocus=this.treeLoseFocus.bind(this);
    this.treePreventFocus=this.treePreventFocus.bind(this);
  }

  componentWillMount(){
    this.markers=this.props.markers;
    this.fields=this.props.fields;
    this.tables=this.props.tables;
    
    let selectedArray=[];
    for (let i = 0; i < 4+this.markers.length+this.fields.length+this.tables.length; i++) {
      selectedArray.push('');
    }
    this.setState({
      selected:selectedArray
    })
  }

  toggleTreeElements(){
    this.state.orientation==='' ? this.setState({orientation:'down'}):this.setState({orientation:''});
  }

  changeSelect(id){
      let selectedArray=[];
      for (let i = 0; i < this.state.selected.length; i++) {
            if(i===id){
              selectedArray.push('elementSelected');
              let type = null;
              let index = null;
              if(1<i && i<=1+this.markers.length){
                type='Marker';
                index=i-2;
              }
              else if(2+this.markers.length<i && i<=2+this.markers.length+this.fields.length){
                type='Field';                
                index=i-3-this.markers.length;
              }
              else if(3+this.markers.length+this.fields.length<i && i<=3+this.markers.length+this.fields.length+this.tables.length){
                type='Table';
                index=i-3-this.markers.length-this.fields.length;
              }
              this.props.selectedIndex(type,index);
            }
            else{
              selectedArray.push('');
            }
      }
      this.setState({
        selected:selectedArray
      })
  }

  treePreventFocus(){
    this.ignoreChange=true;
  }

  treeLoseFocus(){
    if(!this.ignoreChange){
      let selectedArray=[];
      this.state.selected.forEach(element => {
        selectedArray.push('');
      });
      this.setState({
        selected:selectedArray
      })
      this.props.selectedIndex(null);
    }
    this.ignoreChange=false;
  }
  
  render(){
    let i=0;
    return (
      <div className="treerest" onClick={this.treeLoseFocus}>
        <div onClick={this.treePreventFocus}>
          <div className={'trainingset'}><div className="traininglabel">Training Set</div></div>
          <ParentElement changeSelect={this.changeSelect} id={i} selected={this.state.selected[i++]} func={this.toggleTreeElements} treeLabel="Layout 1"/>

          <div className={this.state.orientation==='' ? 'invisible':'visible'}>
          <TreeElement changeSelect={this.changeSelect} id={i} selected={this.state.selected[i++]} treeLabel="Markers" endElements={this.markers} childrenSelected={this.state.selected.slice(i,i+this.markers.length)}/>
          <TreeElement changeSelect={this.changeSelect} id={i+this.markers.length} selected={this.state.selected[i++ + this.markers.length]} treeLabel="Fields" endElements={this.fields} childrenSelected={this.state.selected.slice(i+this.markers.length,i+this.markers.length+this.fields.length)}/>
          <TreeElement changeSelect={this.changeSelect} id={i+this.markers.length+this.fields.length} selected={this.state.selected[i++ + this.markers.length+this.fields.length]} treeLabel="Tables" endElements={this.tables} childrenSelected={this.state.selected.slice(i+this.markers.length+this.fields.length,i+this.markers.length+this.fields.length+this.tables.length)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Tree;
