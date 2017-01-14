//个人中心
import Footer from "../layout/footer";
class Personal extends React.Component{
	render(){
		//mui.init();
		return (
			<div id="personal">
				<header>
					<figure>
						<img src=""/>
					</figure>
					<span>15832666666</span>
					<div>
						<dl>
							<dt>1</dt>
							<dd>商品收藏</dd>
						</dl>
						<span></span>
						<dl>
							<dt>1</dt>
							<dd>店铺收藏</dd>
						</dl>
					</div>
				</header>
				<div id="liebiao">
					<ul className="mui-table-view">
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">Item 1</a>
					    </li>
					    <li className="mui-table-view-cell">
					        Item 2
					    </li>
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">Item 3</a>
					    </li>
					</ul>
					<ul className="mui-table-view">
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">Item 1</a>
					    </li>
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">Item 3</a>
					    </li>
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">Item 3</a>
					    </li>
					</ul>
					<ul className="mui-table-view">
					    <li className="mui-table-view-cell">
					        <a className="mui-navigate-right">Item 1</a>
					    </li>
					</ul>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Personal;
