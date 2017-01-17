import {Link} from "react-router";
class Cart extends React.Component{
	render(){
		return (
			<div className="cart">
				{this.props.children}
				<div className="excit">
					<i className="iconfont ic"><Link to="/register" className="fff">&lt;</Link></i>
					<h1 className="login">登录</h1>
					<Link to="/register" className="fff">
						<button id='reg' className="reg">注册</button>
					</Link>
				</div>
				<form>
					<div className="name">
						<label>账号</label>
						<input type="text" placeholder="请输入账号"/>
					</div>
					<div className="password">
						<label>密码</label>
						<input type="password" placeholder="请输入密码"/>
					</div>
				</form>
				<button className="btn"><Link to="/personal" className="fff">登录</Link></button>
				<p className="forget">忘记密码</p>
			</div>
		)
	}
}
export default Cart;