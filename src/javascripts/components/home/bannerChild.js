//暴出{什么}，接受{什么}，如果是default，可以没有{}
import {packageSwiper} from "../../utils/common.js";
var BannerChild = React.createClass({
	render : function(){
		var src = this.props.src
		return (
			<div className="swiper-slide"><img src={src}/></div>
		)
	},
	componentDidMount : function(){
		let banswip = packageSwiper("#swiperCon");
		
	}
});


module.exports = BannerChild;