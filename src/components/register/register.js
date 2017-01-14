import {Link} from "react-router";
class Register extends React.Component{
	render(){
		return (
			<div className="cart">
				<div className="excit">
					<Link to="/cart">
						<a className="iconfont ic">&lt;</a>
					</Link>
					<h1 className="login">注册账号</h1>
				</div>
				<form>
					<div className="name">
						<label>手机号</label>
						<input type="text" placeholder="请输入手机号"/>
					</div>
					<div className="password">
						<label>验证码</label>
						<input type="text" placeholder="请输入验证码"/>
						<a className="photo"><img src="../../../img/Code.png" /></a>
					</div>
					<div className="password">
						<input type="text" placeholder="请输入密码" className="place"/>
					</div>
					<div className="password">
						<input type="text" placeholder="请再次输入密码" className="place"/>
					</div>
					<div className="password">
						<input type="text" placeholder="请输入手机验证码" className="place"/>
						<label className="getm">获取验证码</label>
					</div>
				</form>
				<Link to="Indent">
					<button className="btn">注册</button>
				</Link>
			</div>
		)
	}
}
export default Register;