const h1Tag = React.createElement("h1", null, "Learn Web Devlopment");

//!  First paragraph
const p1Tag = React.createElement(
  "p",
  null,
  "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites"
);
const firstDiv = React.createElement("div", { className: "firstDiv" }, p1Tag);

//! Second Paragraph
const aTag = React.createElement(
  "a",
  { href: "https://developer.mozilla.org/en-US/" },
  "the rest of MDN"
);

const p2Tag = React.createElement(
  "p",
  null,
  `The aim of this area of MDN is not to  take you from "beginner" to "export" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from `,
  aTag,
  ", and other intermediate to advanced resources that assume a lot of previous knowledge"
);
const secondDiv = React.createElement("div", { className: "secondDiv" }, p2Tag);

//! Third Paragraph
const p3Tag = React.createElement(
  "p",
  null,
  "If you are a complete beginner, webdevelopment can be challenging -- we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home wether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work"
);

const lastDiv = React.createElement("div", { className: "lastDiv" }, p3Tag);

const container = React.createElement("div", { className: "container" }, [
  h1Tag,
  firstDiv,
  secondDiv,
  lastDiv,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
