// What is JSX?
// JSX stands for JavaScript XML.

// JSX allows us to write HTML in React.

// JSX makes it easier to write and add HTML in React.

// Coding JSX
// JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

// JSX converts HTML tags into react elements.


const elements=<h1>hi im prashant chavan </h1>
const navbar=(
    <div>
        {elements}
    <ul>
    <li>home</li>
    <li>about</li>
    <li>contact </li>
    <li>info</li>
    </ul>
    </div>
)
ReactDOM.render(
  navbar,
    document.getElementById("root")
)
