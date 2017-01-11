var Styles = require("./styles");
var Header = React.createClass({
	render: function(){
		return (
			<div style={Styles.header}>
				<img src="./img/logo.png" style={Styles.himg}/>
				<div style={Styles.inputBox}>
					<input type="text" style={Styles.input}/>
					<span className="iconfont">&#xe600;</span>
				</div>
			</div>
		)
	}
});
module.exports = Header;