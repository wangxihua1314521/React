var Header = React.createClass({
	render: function(){
		return (
			<div style={styles.header}>
				<img src="./img/logo.png" style={styles.himg}/>
				<div style={styles.inputBox}>
					<input type="text" style={styles.input}/>
					<span className="iconfont">&#xe600;</span>
				</div>
			</div>
		)
	}
});
module.exports = Header;