var BannerChild = React.createClass({
	render: function(){
		return (
	        <div className="swiper-slide">
	        	<img src={this.props.name} style={styles.bannerimg}/>
        	</div>
		)
	},
	componentDidMount:function(){
		swiper = new Swiper('.swiper-container',{
			pagination : '.swiper-pagination',
			autoplay : 3000,
			initialSlide :0,
			loop:true,
			lazyLoading : true,//true开启图片延迟加载
			lazyLoadingInPrevNext : true,//将延迟加载应用到最接近的slide的图片（前一个和后一个slide）。
			lazyLoadingInPrevNextAmount : 2,//默认为1，提前1个slide加载图片，例如切换到第三个slide时加载第四个slide里面的图片。
			loop : true,//循环
			freeMode : false
		})
	}
});
module.exports = BannerChild;