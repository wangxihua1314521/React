//个人中心
import Footer from "../layout/footer";
class Personal extends React.Component{
	render(){
		//mui.init();
		return (
			<div id="personal">
				<header>
					<div>
						<figure>
							<img src=""/>
						</figure>
						<span>15832666666</span>
					</div>
					<div className="person_dl">
						<dl>
							<dt>1</dt>
							<dd>商品收藏</dd>
						</dl>
						<b></b>
						<dl>
							<dt>1</dt>
							<dd>店铺收藏</dd>
						</dl>
					</div>
				</header>
				<div id="liebiao">
					<ul className="mui-table-view">
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">
						        <b>我的订单</b>
						        <span>查看全部订单</span>
					        </a>
					    </li>
					</ul>
				    <nav>
				    	<ul>
				    		
				    	</ul>
				    </nav>
					<ul className="mui-table-view">
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">
					        	<b>我的优惠券</b>
						        <span>8</span>
					        </a>
					    </li>
					    <li className="mui-table-view-cell">
				         	<b>我的积分</b>
					    	<span className="p_li_jifen">101分</span>
					        
					    </li>
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">
					        	<b>我的拼团</b>
					        </a>
					    </li>
					</ul>
					<ul className="mui-table-view">
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">我要推广</a>
					    </li>
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">收货地址管理</a>
					    </li>
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">账号管理</a>
					    </li>
					</ul>
					<ul className="mui-table-view">
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">关于我们</a>
					    </li>
					</ul>
					<div className="p_quit">
						退出
					</div>
				</div>
				
				<Footer/>
			</div>
		)
	}
}

export default Personal;
