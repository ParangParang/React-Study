import React, {Component} from "react";


class TextReadContent extends Component {
    render () {
      return (
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc} 
        </article>
      );
    }
  }


export default TextReadContent;