var ListChild = React.createClass({
	render: function(){
		return (
			
				<div style={styles.list}>
					<img src={this.props.name.url} style={styles.listimg}/>
					<p>{this.props.name.tip}</p>
					<p style={styles.txt}>
						<span style={styles.txtcolor}>{this.props.name.price}</span>
						/*<span className="iconfont" style={styles.ico}>&#xe611;</span>*/
					</p>
				</div>
			
		)
	}
});
module.exports = ListChild;