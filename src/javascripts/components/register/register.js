import {Link} from "react-router";
var Register = React.createClass({
	getInitialState:function() {
		return {
			phone : "",
			yzm:"",
			password:"",
			repassword:"",
			phoneyzm:""
		}
	},
	handlePhone:function(e){
		var value = e.target.value;
		var error="";
		var reg = /^[1][358][0-9]{9}$/;
		if(!reg.test(value)){
			error = "手机号错误，请重新输入"
		}
		this.setState({
			value:error
		})
	},
	handleYzm:function(e){
		var value = e.target.value;
		var error="";
		var reg = /^[1][358][0-9]{9}$/;
		if(!reg.test(value)){
			error = "手机号错误，请重新输入"
		}
		this.setState({
			value:error
		})
	},
	handlePassword:function(e){
		var value = e.target.value;
		var error="";
		var reg = /^[1][358][0-9]{9}$/;
		if(!reg.test(value)){
			error = "手机号错误，请重新输入"
		}
		this.setState({
			value:error
		})
	},
	handleRepassword:function(e){
		var value = e.target.value;
		var error="";
		var reg = /^[1][358][0-9]{9}$/;
		if(!reg.test(value)){
			error = "手机号错误，请重新输入"
		}
		this.setState({
			value:error
		})
	},
	handlePhoneyzm:function(e){
		var value = e.target.value;
		var error="";
		var reg = /^[1][358][0-9]{9}$/;
		if(!reg.test(value)){
			error = "手机号错误，请重新输入"
		}
		this.setState({
			value:error
		})
	},
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
						<input type="text" placeholder="请输入手机号" id="phone" value={this.state.phone} onChange={this.handlePhone}/>
					</div>
					<div className="password">
						<label>验证码</label>
						<input type="text" placeholder="请输入验证码" id="yzm" value={this.state.yzm} onChange={this.handleYzm}/>
						<a className="photo"><img src="../../../img/Code.png" /></a>
					</div>
					<div className="password">
						<input type="text" placeholder="请输入密码" className="place" id="password" value={this.state.password} onChange={this.handlePassword}/>
					</div>
					<div className="password">
						<input type="text" placeholder="请再次输入密码" className="place" id="repassword" value={this.state.repassword} onChange={this.handleRepassword}/>
					</div>
					<div className="password">
						<input type="text" placeholder="请输入手机验证码" className="place" id="phoneyzm" value={this.state.phoneyzm} onChange={this.handlePhoneyzm}/>
						<label className="getm">获取验证码</label>
					</div>
				</form>
				<Link to="/login">
					<button className="btn">注册</button>
				</Link>
			</div>
		)
	}
})
module.exports = Register;