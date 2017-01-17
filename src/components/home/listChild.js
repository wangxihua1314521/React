import {Link} from "react-router";
var ListChild = React.createClass({
	render: function(){
		return (
			
				<div style={styles.list}>
					<img src={this.props.name.url} style={styles.listimg}/>
					<Link to="/details"><p>{this.props.name.tip}</p></Link>
					<p style={styles.txt}>
						<span style={styles.txtcolor}>{this.props.name.price}</span>
						<span className="iconfont" style={styles.ico}><Link to="/details" className="fff">&#xe611;</Link></span>
					</p>
				</div>
			
		)
	}
});
module.exports = ListChild;