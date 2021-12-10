import React, { Component } from 'react';
/* react 라이브러리에서 Component를 로딩한 것. Component 쓸 때는 필수 */
import ToC from "./Component/ToC";
/* 앞은 파일 이름, 뒤는 파일 위치 */
import Subject from './Component/Subject';
import Control from "./Component/Control";
import TextReadContent from './Component/TextReadContent';
import CreateContent from './Component/CreateContent';
import UpdateContent from './Component/UpdateContent';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    /* state의 값을 초기화 */
    this.max_tableContents_id = 3;
    this.state = {
      mode:'welcome',
      /* 보고 있는 페이지가 welcome인지 read인지 구분하기 위해 
      기본값 welcome */
      selectedTable_id : 1,

      subject:{title:'WEB', desc:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, it\'s react!'},
      tableContents : [
        /* 배열로 다룰 것이라 대괄호 연 것 */
        {id:1, title:"HTML", desc:"HTML is ..... nothing but start point" },
        {id:2, title:"CSS", desc:"CSS is ..... nothing but start point" },
        {id:3, title:"JavaScript", desc:"JavaScript is ..... nothing but start point" }
      ]
    }
  }

  getReadContent(){
    var i = 0;
    while (i < this.state.tableContents.length){
      var data = this.state.tableContents[i];
      if (data.id === this.state.selectedTable_id){
        return data;
      }
      i = i + 1;
    }
    
  }

  getContent () {
    var _title, _desc, _article = null ;
    /* 먼저 define 하고 */
  if (this.state.mode === 'welcome'){
    _title = this.state.welcome.title;
    _desc = this.state.welcome.desc;
    _article = <TextReadContent title={_title} desc = {_desc}></TextReadContent>;
  } else if (this.state.mode === 'read'){
    var _content = this.getReadContent();
    _article = <TextReadContent title={_content.title} desc = {_content.desc}></TextReadContent>;

  } else if (this.state.mode === 'create'){
   
    _article = <CreateContent onSubmit = {function ( _id, _title, _desc) {
      this.max_tableContents_id = this.max_tableContents_id + 1;
      var _table = this.state.tableContents.concat(
        {id : this.max_tableContents_id, title : _title, desc : _desc }
      )
      this.setState({
        tableContents : _table,
        mode : 'read',
        selectedTable_id : this.max_tableContents_id
       }        
      );

    }.bind(this)}></CreateContent>

  } else if (this.state.mode === 'update'){

    _content = this.getReadContent();
    _article = <UpdateContent data = {_content} 
    
      onSubmit = {function (_id, _title, _desc) {
      var _contents = Array.from(this.state.tableContents);
      console.log("1" + JSON.stringify(_contents));
      var i = 0;
      while (i < _contents.length){
        if ( _contents[i].id === _id ){
          _contents[i] = {id : _id, title : _title, desc : _desc};
          break;
        }
        i = i + 1;
      }

      this.setState({
        tableContents : _contents,
        mode : 'read'
       }        
      );

    }.bind(this)}></UpdateContent>

   } 
   return _article;
  }

 
  /* 어떤 Component가 실행될 때, render라는 함수보다 먼저 실행되면서 Component를 초기화함과 동시에 실행하고 싶은 함수가 있다면,
  constructor를 만들고 그 안에 넣으면 된다. 생성자의 의미를 생각해보자. */
  render() {

   return (
     <div className="App">

      <Subject 
        title={this.state.subject.title} 
        sub = {this.state.subject.sub}
        onChangePage = {function () {
          this.setState({
            mode:'welcome'
        });

        }.bind(this)}
      >
      </Subject>



      <ToC onChangePage = {function (id) {
        this.setState({
          mode:'read', 
          selectedTable_id: Number(id)} 
        );
      }.bind(this)} 

        data={this.state.tableContents}>
      </ToC>

      <Control onChangeMode = {function (changeMode) {
        this.setState({
          mode : changeMode
        });
      }.bind(this)}> </Control>

      {this.getContent()}

     </div>
     );
  }
}


export default App;
