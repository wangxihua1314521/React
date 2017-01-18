//footer放置A标签
import {Link} from "react-router";


class Footer extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		
		return(
			<footer>				
				<Link to="/home">
					<i className="iconfont">&#xe729;</i>首页
				</Link>
				<Link to="/classify">
					<i className="iconfont">&#xe610;</i>分类
				</Link>
				<Link to="/cart">
					<i className="iconfont">&#xe611;</i>购物车
				</Link>
				<Link to="/personal">
					<i className="iconfont">&#xe653;</i>个人中心
				</Link>
			</footer>
		)
	}
}

export default Footer;