import React, {Component} from "react";


class CreateContent extends Component {
    render () {
      return (
        <article>
          <h2>Create</h2>
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
            <p>
              <input type = "text" name = "title" 
                placeholder = "title">
              </input>
            </p>
            <p>
              <textarea name = "desc" placeholder = "desc">
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


export default CreateContent;