var BannerChild = require("./bannerChild");
var Banner = React.createClass({
	getDefaultProps:function(){
		return {
			"url":"http://localhost:9000/banner"
		}
	},
	getInitialState:function(){
		return {
			"result":""
		}
	},
	componentWillMount:function(){
		var that = this;
		$.ajax({
			type:"get",
			url:this.props.url,
			success:function(res){
				that.setState({
					"result":res
				})
			}
		});
	},
	render: function(){
		var arr = [];
		var result = this.state.result;
		if(result){
			for(var i=0;i<result.length;i++){
				arr.push(<BannerChild name={result[i].img}/>)
			}
		}
		return (
			<div className="swiper-container">
			    <div className="swiper-wrapper">
			        {arr}
			    </div>
			    <div className="swiper-pagination"></div>
			</div>
		)
	}
});
module.exports = Banner;