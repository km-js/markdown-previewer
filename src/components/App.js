import React from "react";
import marked from "marked";
import insane from "insane";
import "../App.scss";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
        1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInput: placeholder
    };
  }
  handleChange = e => {
    this.setState({ UserInput: e.target.value });
  };
  render() {
    return (
      <div>
        <header className="heading">Markdown Previewer</header>

        <div className="wrapper">
          <div className="editorWrap">
            <label htmlFor="editor" className="title">
              {" "}
              Start typing below{" "}
            </label>
            <textarea
              id="editor"
              type="text"
              onChange={this.handleChange}
              autoFocus
            >
              {this.state.UserInput}
            </textarea>
          </div>
          <div className="converter"></div>
          <div className="previewWrap">
            <div
              id="preview"
              dangerouslySetInnerHTML={{
                __html: insane(marked(this.state.UserInput))
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
