import React from 'react';
import './App.css';
import Tree from './components/Tree';
import Path from './components/Path';
import Editor from './components/Editor';
import PDFViewer from './components/PDFViewer';
//import PDFJSBackend from './backends/pdf';
import WebviewerBackend from './backends/webviewer';

class App extends React.Component {

  markers=['First Marker','Second Marker'];
  fields=['Employer_ID','Gross_receipts_or_sales','Ordinary_business_income'];
  tables=['Table 1','Table 2','Table 3'];
  selectedInfo=[];

  constructor(){
    super()
    this.state={
      dummyStateForRender:false
    }
    this.getSelectedIndex = this.getSelectedIndex.bind(this);
  }

  getSelectedIndex(type,index){
    this.selectedInfo.splice(0,this.selectedInfo.length)
    this.setState({
      dummyStateForRender:!this.state.dummyStateForRender
    })
    this.selectedInfo.push(type,index)
  }

  render(){
    return (
      <div className="container">
        <div className="lefthalf">
          <div className="company"></div>
          <div className="treecontainer">
            <Tree
              selectedIndex={this.getSelectedIndex} 
              markers={this.markers} 
              fields={this.fields}
              tables={this.tables} 
            />
          </div>
        </div>
        <div className="righthalf">
          <div className="navbar">
            <Path group="Group_10" name="book.pdf"/>
          </div>
          <div className="pdfcontainer">
            <PDFViewer backend={WebviewerBackend} src='/3WAVES.pdf'/>
          </div>
          <div className="editorcontainer">
          <Editor 
            typeselected={this.selectedInfo}
            markers={this.markers} 
            fields={this.fields}
            tables={this.tables} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
