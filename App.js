import React from "react";
import  ReactDOM  from "react-dom/client";

// REACT ELEMENT BY react.createELEMENT()
const nestedElement = React.createElement("div",{class:"title"},React.createElement("h1",{},
React.createElement("h2",{},React.createElement("h3",{},"Hello World!"))));


//JSX

const nestedElementJsx = <div class="title">
    <h1>
        My name is rakesh
    </h1>
    <h2>
        hello
    </h2>
    <h3>How are you</h3>
</div>


//functional component
const FunctionalComponent = () => {
    return(<div className="title">
    <h1>
        My name is Amit
    </h1>
    <h2>
        hello
    </h2>
    <h3>How are you</h3>
</div>);
}
// Component Composition
const FunctionalComponentTwo = () => 
    (<div className="title">
        <FunctionalComponent/>
    <h1>
        My name is Rakesh Ranjan
    </h1>
    <h2>
        hello
    </h2>
    <h3>How are you</h3>
</div>);

const rootElement = ReactDOM.createRoot(document.getElementById("root"))
rootElement.render(<FunctionalComponentTwo/>);