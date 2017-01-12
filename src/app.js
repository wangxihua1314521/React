var LayOut = require("./components/layout");
var Header = require("./components/header");

var Banner = require("./components/banner");
var Main = require("./components/main");
var List = require("./components/list");

var Footer = require("./components/footer");



ReactDOM.render(<LayOut/>,document.getElementById("app"));
ReactDOM.render(<Header/>,document.getElementById("header"));

ReactDOM.render(<Banner/>,document.getElementById("banner"));
ReactDOM.render(<Main/>,document.getElementById("main"));
ReactDOM.render(<List/>,document.getElementById("list"));

ReactDOM.render(<Footer/>,document.getElementById("footer"));