import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { marked } from "https://esm.sh/marked";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    });
  };

  convertMarkdownToHTML = (text) => {
    return marked(text);
  };

  render() {
    return (
      <div>
        <h1>Editor</h1>
        <textarea 
          id="editor" 
          value={this.state.message} 
          onChange={this.handleMessageChange}
          placeholder="Enter markdown here..."
        />
        
        <h1>Previewer</h1>
        <div 
          id="preview" 
          dangerouslySetInnerHTML={{ __html: this.convertMarkdownToHTML(this.state.message) }} 
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));