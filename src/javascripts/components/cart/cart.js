//购物车
import {Link} from "react-router";

class Cart extends React.Component{
	render(){
		return (
			<div id="cart">
				<header>
					<i className="iconfont">&#xe7ec;
						<Link to="/details" className="lianjie"></Link>
					</i>
					<span>购物车</span>
				</header>
				<div className="content">
					<article>
						<summary>
							<em></em>
							<i className="iconfont">&#xe6d5;</i>
							<span>中酒自营</span>
						</summary>
						<ul>
							<li>
								<em></em>
								<img alt="" src="/img/cart01.png"/>
								<div className="number">
									<p>中酒网手机支架(赠品...</p>
									<form>
										<button>-</button>
										<input type="text" value="1"/>
										<button>+</button>
									</form>
								</div>
								<div className="price">
									<b>¥99.00</b>
									<i className="iconfont">&#xe682;</i>
								</div>
							</li>
							<li>
								<em></em>
								<img alt="" src="/img/cart01.png"/>
								<div className="number">
									<p>中酒网手机支架(赠品...</p>
									<form>
										<button>-</button>
										<input type="number" value="1"/>
										<button>+</button>
									</form>
								</div>
								<div className="price">
									<b>¥99.00</b>
									<i className="iconfont">&#xe682;</i>
								</div>
							</li>
						</ul>
					</article>
					<article>
						<summary>
							<em></em>
							<i className="iconfont">&#xe6d5;</i>
							<span>中酒连锁烟台旗舰店</span>
						</summary>
						<ul>
							<li>
								<em></em>
								<img alt="" src="/img/cart01.png"/>
								<div className="number">
									<p>中酒网手机支架(赠品...</p>
									<form>
										<button>-</button>
										<input type="text" value="1"/>
										<button>+</button>
									</form>
								</div>
								<div className="price">
									<b>¥99.00</b>
									<i className="iconfont">&#xe682;</i>
								</div>
							</li>
							<li>
								<em></em>
								<img alt="" src="/img/cart01.png"/>
								<div className="number">
									<p>中酒网手机支架(赠品...</p>
									<form>
										<button>-</button>
										<input type="text" value="1"/>
										<button>+</button>
									</form>
								</div>
								<div className="price">
									<b>¥99.00</b>
									<i className="iconfont">&#xe682;</i>
								</div>
							</li>
						</ul>
					</article>
				</div>
				<footer>
					<ul>
						<li>
							<em></em>
							<span>全选</span>
						</li>
						<li>
							<strong>合计:
							<b>¥0.00</b></strong>
							<span>不含邮费</span>
						</li>
						<li>
							结算
						</li>
					</ul>
				</footer>
			</div>
		)
	}
}

export default Cart;