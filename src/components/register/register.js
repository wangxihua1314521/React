import {Link} from "react-router";
var Register = React.createClass({
	handlePhone:function(e){
		var that = this;
		var value = e.target.value;
		var reg = /^[1][358][0-9]{9}$/;
		if(!reg.test(value)){
			alert("手机号格式不正确！");
		}
	},
	handleYzm:function(e){
		var that = this;
		var value = e.target.value;
		var reg = "wjnl";
		if(value != reg){
			alert("验证码不正确！");
		}
	},
	handlePassword:function(e){
		var that = this;
		var value = e.target.value;
		var reg = /^[a-zA-Z]\w{5,14}$/;
		if(!reg.test(value)){
			alert("密码格式不正确！");
		}
	},
	handleRepassword:function(e){
		var that = this;
		var pass = $('#password').val();
//		console.log(pass);
		var value = e.target.value;
		if(value != pass){
			alert("两次输入的密码不相同！");
		}
	},
	handlePhoneyzm:function(e){
		var that = this;
		var value = e.target.value;
		if(value == ""){
			alert("不能为空！");
		}
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
						<input type="text" placeholder="请输入手机号" id="phone"  onBlur={this.handlePhone}/>
					</div>
					<div className="password">
						<label>验证码</label>
						<input type="type" placeholder="请输入验证码" id="yzm" onBlur={this.handleYzm}/>
						<a className="photo"><img src="../../../img/Code.png" /></a>
					</div>
					<div className="password">
						<input type="password" placeholder="请输入6-15位数字、字母组合密码" className="place" id="password" onBlur={this.handlePassword}/>
					</div>
					<div className="password">
						<input type="password" placeholder="请再次输入密码" className="place" id="repassword" onBlur={this.handleRepassword}/>
					</div>
					<div className="password">
						<input type="text" placeholder="请输入手机验证码" className="place" id="phoneyzm" onBlur={this.handlePhoneyzm}/>
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