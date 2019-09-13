/* eslint-disable */
const React = require("react");
const ReactDOM = require("react-dom");
const SlateEditor = require("./editor").default;

const DOCBODY = require("./fixtures/markdown");
const Markdown = require("../packages/markdown");

function render(Component = "div", props = {}) {
  ReactDOM.render(<Component {...props} />, document.getElementById("root"));
}

const mdOpt = {
    correctnewlines: true,
    markdownOptions: {
      fences: true,
      commonmark: true,
      gfm: true
    }
  },
  style = {
    maxWidth: "42em",
    margin: "1em auto",
    padding: "0 1em"
  };

render(SlateEditor, {
  value: Markdown.render.dash(DOCBODY, mdOpt),
  className: "markdown-body",
  style
});

// render('div', {
//   children: Markdown.render.dash(DOCBODY, mdOpt),
//   className: 'markdown-body',
//   style,
// });