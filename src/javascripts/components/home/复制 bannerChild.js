var Styles = require("./styles");
var BannerChild = React.createClass({
	render: function(){
		return (
	        <div className="swiper-slide">
	        	<img src={this.props.name} style={Styles.bannerimg}/>
        	</div>
		)
	},
	componentDidMount:function(){
		var swiper = new Swiper('swiper-container',{
			pagination: '.swiper-pagination',
			outplay:2000,
			loop:true
		})
	}
});
module.exports = BannerChild;