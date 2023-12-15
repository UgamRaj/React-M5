//!  First paragraph
const h1Tag = React.createElement("h1", null, "Topics covered");

const p = React.createElement(
  "p",
  null,
  "The following is a list of all the topics we cover in the MDN learning area"
);

const a1Tag = React.createElement(
  "a",
  { href: "" },
  "Getting started with the web"
);
const p1Tag = React.createElement(
  "p",
  { className: "p3Tag" },
  "Provides a practical introduction to web deveopment for complete beginners"
);
const firstDiv = React.createElement(
  "div",
  { className: "firstDiv" },
  a1Tag,
  p1Tag,
  React.createElement("br")
);

//! Second Paragraph
const a2Tag = React.createElement(
  "a",
  { href: "" },
  "HTml -- Structuring the web"
);

const p2Tag = React.createElement(
  "p",
  { className: "p3Tag" },
  "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTMl in details"
);
const secondDiv = React.createElement(
  "div",
  { className: "secondDiv" },
  a2Tag,
  p2Tag,
  React.createElement("br")
);
//! Third Paragraph
const a3Tag = React.createElement("a", { href: "" }, "CSS -- Styling the web");

const p3Tag = React.createElement(
  "p",
  { className: "p3Tag" },
  "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS"
);
const lastDiv = React.createElement(
  "div",
  { className: "secondDiv" },
  a3Tag,
  p3Tag
);

const container = React.createElement("div", { className: "container" }, [
  h1Tag,
  p,
  firstDiv,
  secondDiv,
  lastDiv,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
