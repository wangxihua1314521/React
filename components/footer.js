var Styles = require("./styles");
var Router = require("./route");

var Footer = React.createClass({
	mixins:[Router],
	render: function(){
		return (
			<div style={Styles.footer}>
				<div onClick={this.router} href="/index" style={Styles.footerDiv}>首页</div>
				<div onClick={this.router} href="/classify" style={Styles.footerDiv}>分类</div>
				<div onClick={this.router} href="/cart" style={Styles.footerDiv}>购物车</div>
				<div onClick={this.router} href="/center" style={Styles.footerDiv}>个人中心</div>
			</div>
		)
	}
});
module.exports = Footer;