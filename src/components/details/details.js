import DetailsBanner from "./details-banner";
import {packageSwiper} from "../../utils/common";
import {Link} from "react-router";
class Details extends React.Component{
	constructor(...args){
		super(...args);
		this.state = {
			"result":""
		}
	}
	componentWillMount(){
		let _this = this;
		$.ajax({
			type:"get",
			url:this.props.url,
			async:true,
			dataType:"json",
			success:function(res){
				_this.setState({
					"result":res
				})
			}
		});
	}
	render(){
		let data = this.state.result;
		let dBanner = [];
		if(data){
			let dBannerData = data.ban;
			let dIntroductionData = data.introduction;
			for (let i=0; i<dBannerData.length; i++){
				dBanner.push(
					<DetailsBanner src={dBannerData[i]} />
				)
			}
		}
		
		return(
			<div id="details">
				<header>
					<ul>
						<Link to="/classify-list">
							<li className="iconfont">&#xe603;</li>
						</Link>
						<li>商品详情</li>
						<li className="iconfont">&#xe622;</li>
					</ul>
				</header>
				<section>
					<div className="details_banner">
						<div id="d_banner" className="swiper-container">
						    <div className="swiper-wrapper">
						    	{dBanner}
						    </div>
						    <div className="swiper-pagination"></div>
						</div>
					</div>
					<div className="details_content">
						<div className="details_introduction">
							<article>
								<b></b>
								<del>¥9999</del>
								<p>53°茅台飞天 500ml (6瓶装)</p>
								<span>[特价商品,不能使用优惠券]茅台玉液,传世飞天</span>
							</article>
							<ul>
								<li>
									<em>优惠券</em>
									<span>7张可领优惠券</span>
									
								</li>
								<li>
									<em>满额免</em>
									<span>满额99免运费</span>
									
								</li>
								<li>
									<em>红包</em>
									<span>满99送3个代金红包</span>
									
								</li>
							</ul>
						</div>
						<div className="details_comment">
							<summary>
								商品评价
								<span>
									56
								</span>
							</summary>
							<ul>
								<li>
									<p>13392617928</p>
									<p>好评</p>
									<span>2016.10.12 12.50.23</span>
								</li>
								<li>
									<p>13392617928</p>
									<p>好评</p>
									<span>2016.10.12 12.50.23</span>
								</li>
							</ul>
							<a>
								全部评价
							</a>
						</div>
						<div className="details_merchant">
						</div>
						<figcaption>
							拖动查看详情
						</figcaption>
						<div className="details_information">
							<figure>
								<span>商品图文详情</span>
								<img alt="" src="/img/d-01.jpg" />
								<img alt="" src="/img/d-02.jpg" />
							</figure>
						</div>
						
					</div>
				</section>
				<footer>
					<ul>
						<Link to="/cart">
							<li>
								<i className="iconfont">&#xe730;</i>
								购物车
							</li>
						</Link>
						<li>加入购物车</li>
						<li><Link to="/indent">立即购买</Link></li>
						<li>
							<i className="iconfont">&#xe626;</i>
							收藏
						</li>
					</ul>
				</footer>
			</div>
		)
	}
	

	
}

Details.defaultProps = {
	"url":"/api/details"
}

export default Details;
