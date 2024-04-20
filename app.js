
const kar = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hi i am H1"), React.createElement("h2", {}, "Hi i am H2")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(kar);