import React from 'react';
import '../App.css';

export class EditorTreeElement extends React.Component {

  constructor(){
    super()
    this.state={
      orientation:'',
    }
    this.toggleDrop=this.toggleDrop.bind(this);
  }

  toggleDrop(){
    this.state.orientation==='' ? this.setState({orientation:'down'}):this.setState({orientation:''});
  }

  render(){
    return (
      <div>
        <div className="editorTreeElement">
            <div className={['editorTreeDropicon',this.state.orientation].join(' ')} onClick={this.toggleDrop}></div>
            <div>{this.props.name}</div>
        </div>
        <div className={this.state.orientation==='' ? 'invisible':''}>
            <div className="row">
                <div className="rowlabel">Label</div>
                <input type="text" name="label"/>
            </div>
            <div className="row">
                <div className="rowlabel">Value</div>
                <textarea rows="4" cols="30" type="text" name="label"/>
            </div>
        </div>
      </div>
    );
  }
}