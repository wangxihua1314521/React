var BannerChild = React.createClass({
	render: function(){
		return (
	        <div className="swiper-slide">
	        	<img src={this.props.name} style={styles.bannerimg}/>
        	</div>
		)
	},
	componentDidMount:function(){
		var swiper = new Swiper('#swiper-container-id',{
			autoplay: 3000,//可选选项，自动滑动
			initialSlide :0,//初始索引
			setWrapperSize :true,//开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到
			roundLengths : true,//true将slide的宽和高取整(四舍五入)以防止某些分辨率的屏幕上文字或边界(border)模糊。
			autoHeight: true,//true时，wrapper和container会随着当前slide的高度而发生变化
		    pagination : '.swiper-pagination',//分页
		    paginationClickable :true,//true时，点击分页器的指示点分页器会控制Swiper切换
			loop : true,//循环
		})
	}
});
module.exports = BannerChild;