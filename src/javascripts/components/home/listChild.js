import {Link} from "react-router";

var ListChild = React.createClass({
	render: function(){
		let pathdata = {
			pathname : "/details",
			query : {
				"originPath" : "/home",
				"id":this.props.name.id
			}
		};
		return (
			<Link to={pathdata} style={{"display":"inline-block","height":"auto","width":"auto"}}>
				<div style={styles.list}>
					<img src={this.props.name.url} style={styles.listimg}/>
					<p>{this.props.name.tip}</p>
					<p style={styles.txt}>
						<span style={styles.txtcolor}>{this.props.name.price}</span>
						/*<span className="iconfont" style={styles.ico}>&#xe611;</span>*/
					</p>
				</div>
			</Link>
		)
	}
});
module.exports = ListChild;