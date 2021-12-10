import React, {Component} from "react";


class UpdateContent extends Component {
    constructor(props){
      super(props);
      this.state = {
        id : this.props.data.id,
        title : this.props.data.title,
        desc : this.props.data.desc
      }
    }

    inputFormHandler(e){
      this.setState({[e.target.name] : e.target.value});
    }

    render () {
      return (
        <article>
          <h2>Update</h2>
          <form action="/create_process" method = "post"
            onSubmit = {function (e) {
        /* onSubmit 이벤트 호출 - html form 태그 고유 기능*/
              e.preventDefault();
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
              );
            }.bind(this)}>
            <input type = "hidden" name = "id" value = {this.state.id}></input>
            <p>
              <input 
                type = "text" 
                name = "title" 
                placeholder = "title"
                value = {this.state.title}
                onChange={
                  this.inputFormHandler.bind(this)
                }
              >
              </input>
            </p>
            <p>
              <textarea 
              name = "desc" 
              placeholder = "desc"
              onChange={
                this.inputFormHandler.bind(this)
              }
              value = {this.state.desc}
              >
              </textarea>
            </p>
            <p>
              <input type = "submit">
              </input>
            </p>

          </form>
          
        </article>
      );
    }
  }


export default UpdateContent;