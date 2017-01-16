import {packageSwiper} from "../../utils/common";

class DetailsBanner extends React.Component{
	render(){
		return (
		    <div className="swiper-slide swiper-lazy">
		    	<img src={this.props.src} alt="" />
		    	//<div className="swiper-lazy-preloader"></div>
		    </div>
		)
	}
	componentDidMount(){
		/*var d_banner = new Swiper('#d_banner', {
			autoplay: 5000,//可选选项，自动滑动
			initialSlide :0,//初始索引
			direction : 'horizontal',//滑动方向水平|垂直vertical
			speed:300,//滑动速度，滑动开始到结束的时间
			autoplayDisableOnInteraction : false,//手滑后自动播放不停止
			
		    pagination : '.swiper-pagination',//分页
		    paginationClickable :true,//true时，点击分页器的指示点分页器会控制Swiper切换
			loop : true,//循环
		
		})//Swiper end*/
		
		
		//d_banner.updatePagination();
		//d_banner.updateClasses();
		//d_banner.onResize();
		//d_banner.lockSwipes();
		
		let a = packageSwiper("d_banner");
		a.updatePagination();
		a.updateClasses();
		a.onResize();
		console.log(a)
		//a.lockSwipes();
		
	}
}

export default DetailsBanner;