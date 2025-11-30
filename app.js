// EP 01 - Creating React Elements without JSX

const parent = 
    React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child"},
    React.createElement("h1", {}, "Hellow"),
    React.createElement("h1", {}, "Meouu"))],

    [React.createElement("div", {id: "child2"},
    React.createElement("h1", {}, "Wowww"))]
)

// const heading = React.createElement("h1", {id:"heading"}, "Welcome to React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// console.log(heading)

