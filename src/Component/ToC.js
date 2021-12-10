import React, { Component } from 'react';
/* react 라이브러리에서 Component를 로딩한 것. Component 쓸 때는 필수 */

class ToC extends Component {
    shouldComponentUpdate( newProps, newState){
      if (this.props.data === newProps.data){
        return false; 
      } 
      return true;
    }
  
    render(){
      var data = this.props.data;
      var lists = [];
      var i = 0;
     
     /*
      while (i < data.length){
        lists.push(
          <li key={data[i].id}>
            <a 
            href={"/tableContents/"+data[i].id}
            data-id = {data[i].id}
            onClick = { function (e) {

              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)} 
            
            >{data[i].title}</a>
          </li>);

        i = i + 1 ;
      }
      a에 data- 속성을 부여하고, 그 값이 dataset에 저장되는 점을 이용한 방법 */

      while (i < data.length){
        lists.push(
          <li key={data[i].id}>
            <a 
            href={"/tableContents/"+data[i].id}
            onClick = { function (id, e) {

              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)} 
            
            >{data[i].title}</a>
          </li>);
          /*  bind의 두 번째 인자로 data[i].id를 추가하고, function의 첫 번째 인자로 id를 준 후,
            onChangePage의 인자로 id를 주는 법 */
        i = i + 1 ;
      }
      return (
        <nav>
         <ul>

          {lists}

        </ul>
      </nav>
      ); 
    }
  }
  
export default ToC;
/* ToC Component class를 가져다 쓸 수 있게 함 */