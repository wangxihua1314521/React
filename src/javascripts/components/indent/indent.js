class Indent extends React.Component{
	render(){
		return(
			<div className="indent">
				<div className="add">你还没有填写收货地址<span>去新增</span></div>
				<div className="pay"><span>支付方式</span><span className="zf">在线支付</span></div>
				<div className="pay">中酒自营</div>
				<div className="indentList">
					<div className="imgleft"><img src="../../../img/indent.png" /></div>
					<div>
						<p className="imgleft"><a>52°茅台醇原浆 500ml（6瓶装）</a><span></span>¥199.00</p>
						<p className="numb">x1</p>
					</div>
				</div>
				<div className="main">
					<div className="yhj"><span>优惠券</span><span className="zq">抵扣 9 元</span></div>
					<div className="qm">
						<div className="doing">使用优惠券券码:</div>
						<input type="text"/>
						<div className="qd">确认</div>
					</div>
					<div className="yhj"><span>配送方式</span><span className="zq">快递&nbsp;免邮</span></div>
					<div className="ly">给卖家留言:<input type="text" placeholder="选填" className="xt"/></div>
					<div className="yhj"><span><em className="online">在线支付</em></span><span className="zq">微店合计&nbsp;<em>¥199.00</em></span></div>
				</div>
				<div className="zk"><span>可用102积分抵扣&nbsp;<em>¥0.34</em></span></div>
				<div className="yhj"><span>发票信息</span><span className="zq">不需要发票&nbsp;&gt;</span></div>
				<div className="footer">
					<div className="price">
						<span>共<em>1</em>件正品,<em>0</em>件赠品</span>
						<span>已优惠:<em>¥9.00</em>&nbsp;实付款:<em>¥190</em></span>
					</div>
					<div className="btn">提交订单</div>
				</div>
			</div>
		)
	}
}
export default Indent;