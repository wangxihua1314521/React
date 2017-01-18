import DetailsBanner from "./details-banner";
import {packageSwiper} from "../../utils/common";
import DetailsIntroduction from "./details-introduction";
import DetailsComment from "./details-comment";
import DetailsInformation from "./details-information";
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
		let {location} = this.props;
		let {id} = location.query;
		
		$.ajax({
			type:"get",
			url:this.props.url,
			async:true,
			dataType:"json",
			success:function(res){
//				console.log(id)
//				console.log(res)
//				console.log(res[id])
				_this.setState({
					"result":res[id]
				})
			}
		});
	}
	render(){
		//console.log(this.props.location)
		//console.log(this.state.result)
		let data = this.state.result;
		let dBanner = [];
		let dIntroduction = [];
		let dComment = [];
		let dInformation = [];
		
		if(data){
			let dBannerData = data.ban;
			for (let i=0; i<dBannerData.length; i++){
				dBanner.push(
					<DetailsBanner src={dBannerData[i]} />
				)
			};
			let dIntroductionData = data.introduction;
			dIntroduction.push(
				<DetailsIntroduction dIntroductionData={dIntroductionData}/>
			);
			let dCommentData = data.comment;
			dComment.push(
				
				<DetailsComment dCommentData={dCommentData} />
			)
			let dInformationData = data.information;
			for (let k=0; k<dInformationData.length; k++){
				dInformation.push(
					<DetailsInformation dInformationData={dInformationData[k]} />
				)
			}
				
				//<DetailsIntroduction dIntroductionData={this.state.result.introduction}/>//这个组件直接放到return中时，//details 组件装载前,请求ajax,组件装载的时候,装载组件中的子组件,子组件拿数据时,ajax还没有执行完,所以拿到一个空的result,所以就报错了,所以要把子组件放到if中,当有数据的时候再装载
			
			
		}//if end
		let {location} = this.props;
		//console.log(location)
		let {originPath} = location.query;
		if(originPath != undefined){
			sessionStorage.setItem(oPD,originPath)
		}
		let oPD = sessionStorage.getItem(oPD);
		return(
			<div id="details">
				<header>
					<ul>
						<li className="iconfont">&#xe603;
							<Link to={oPD} className="lianjie">
							</Link>
						</li>
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
						{dIntroduction}
						{dComment}
						
						<div className="details_merchant">
						</div>
						<figcaption>
							拖动查看详情
						</figcaption>
						<div className="details_information">
							<figure>
								<span>商品图文详情</span>
								{dInformation}
							</figure>
						</div>
						
					</div>
				</section>
				<footer>
					<ul>
						<li>
							<Link to="/cart" className="lianjie"></Link>
								<i className="iconfont">&#xe730;</i>
								购物车
						</li>
						<li>加入购物车</li>
						<li>立即购买</li>
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
