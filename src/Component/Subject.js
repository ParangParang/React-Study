import React, { Component } from 'react';

class Subject extends Component {
    render() {
      return (
        <header>
          <h1><a href="/" onClick = {function(e){
              e.preventDefault();
              this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
        /* component를 만들 때 그 component는 하나의 최상위 태그만 써야함*/
      );
    }
  }
  
  export default Subject;