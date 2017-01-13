var BannerChild = require("./BannerChild");
var Banner = React.createClass({
	getDefaultProps : function(){
		return {
			"url" : "/api/banner"
		}
	},
	getInitialState : function(){
		return{
			"reset" : ""
		}
	},
	componentWillMount : function(){
		var This = this;
		$.ajax({
			url:this.props.url,
			type:"get",
			dataType : "json",
			success : function(res){
				//console.log(res)
				This.setState({
					"reset" : res
				})
			}
		});
	},
	render : function(){
		var arr = [];
		var reset = this.state.reset;
		if(reset){
			for( var i=0;i<reset.length;i++ ){
				arr.push( <BannerChild src={reset[i]}/> )
			}
		}
		return (
			<div className="banner">
				<div className="swiper-container" id="swiperCon">
			        <div className="swiper-wrapper">
			         	{arr}
			        </div>
			  	    <div className="swiper-pagination"></div>
			    </div>
			</div>
		)
	}
});

module.exports = Banner;