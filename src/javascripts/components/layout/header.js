
//头部
class Header extends React.Component{
	render(){
		return (
			<header>
				<img src="/img/logo.png"/>
				<div>
					<input type="text" name="search"/>
					<span className="iconfont">&#xe600;</span>
				</div>
			</header>
		)
	}
}

export default Header;

