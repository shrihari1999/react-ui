import React from 'react';
import '../App.css';
import {EditorTreeElement} from './EditorTreeElement'

class Editor extends React.Component {

  markers=null;
  fields=null;
  tables=null;
  selectedInfo=null;
  nameArray=[];
  nameOptions=[];

  constructor(){
    super()
    this.state={
      dummyStateForRender:false,
    }

    this.handleChangeType = this.handleChangeType.bind(this);
  }

  componentWillMount(){
    this.markers=this.props.markers;
    this.fields=this.props.fields;
    this.tables=this.props.tables;
    this.selectedInfo=this.props.typeselected;
  }

  handleChangeType(event) {
    this.selectedInfo[0]=event.target.value;
    this.findName();
    this.setState({dummyStateForRender: !this.state.dummyStateForRender});
    this.skipProps=true;
  }

  findName(){
    //this.nameArray.splice(0,this.nameArray.length)
    if(this.selectedInfo[0]==='Marker'){
      this.nameArray=this.markers;
    }
    else if(this.selectedInfo[0]==='Field'){
      this.nameArray=this.fields;
    }
    else if(this.selectedInfo[0]==='Table'){
      this.nameArray=this.tables;
    }
    if(this.nameArray){
      this.nameOptions.splice(0,this.nameOptions.length);
      let i=0;
      this.nameArray.forEach(element => {
        this.nameOptions.push(<option value={i++}>{element}</option>);
      });
    }
  }

  render(){
    if(this.props.typeselected[0]){
      if(!this.skipProps){
        this.selectedInfo=this.props.typeselected;
        this.findName();
      }
      this.skipProps=false;
      return (
        <div>
          <div>
              <div>Selected Area</div>
              <div className="selectedimg">Selected img here</div>
          </div>
          <div className="row">
              <div className="rowlabel">Type</div>
              <select value={this.selectedInfo[0]} onChange={this.handleChangeType}>
                  <option value="Marker">Marker</option>
                  <option value="Field">Field</option>
                  <option value="Table">Table</option>
              </select>
          </div>
          <div className="row">
              <div className="rowlabel">Name</div>
              <select value={this.selectedInfo[1]}>
                  {this.nameOptions}
              </select>
          </div>
          <div className="row">
              <div className="rowlabel">Format</div>
              <div className="disabledtext">Text</div>
          </div>
          <div className="row">
              <div className="rowlabel">Required</div>
              <div className="disabledtext">Yes</div>
          </div>
          <div className="row">
            <EditorTreeElement getOrientation={this.getOrientation} name="Mapping Options" />
          </div>
          <div className="row">
            <EditorTreeElement getOrientation={this.getOrientation} name="Validation Options" />
          </div>
          <div className="row">
            <div className="buttontext save">Save</div>
            <div className="buttontext cancel">Cancel</div>
          </div>
        </div>
      );
    }
    else{
      return (<div></div>)
    }
    }
}


export default Editor;
