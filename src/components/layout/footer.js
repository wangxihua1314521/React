//footer放置A标签
import {Link} from "react-router";


class Footer extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		
		return(
			<div style={styles.footer}>
			
				{this.props.children}
				
				<Link to="/home" style={styles.footerDiv}>
					<div className="iconfont">&#xe729;</div>首页
				</Link>
				<Link to="/classify" style={styles.footerDiv}>
					<div className="iconfont">&#xe610;</div>分类
				</Link>
				<Link to="/cart" style={styles.footerDiv}>
					<div className="iconfont">&#xe611;</div>购物车
				</Link>
				<Link to="/personal" style={styles.footerDiv}>
					<div className="iconfont">&#xe653;</div>个人中心
				</Link>
			</div>
		)
	}
}

export default Footer;