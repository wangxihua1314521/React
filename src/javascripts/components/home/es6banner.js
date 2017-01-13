//import BannerChild from "./bannerChild";
class Banner extends React.Component{
	constructor(...args){
		super(...args)
		this.state={
			"reset":""
		}
	}
	getDefaultProps(){
		return {
			"url":"/api/banner"
		}
	}
	componentWillMount(){
		let _this = this;
		fetch(this.props.url).then(
			response => respones.json()
		).then(
			res => {
				console.log(res)
				_this.setState({
					"reset":res
				})
				console.log(_this.setState.reset)
			}
		).catch(e => console.log(e,"fetch,error"));
	}
	render(){
		let arr = [];
		/*let reset = this.state.reset;
		if(reset){
			for(let i=0; i<reset.length; i++){
				arr.push( <BannerChild name={reset[i]}/> )
			}
		}*/
		return(
			<div className="banner">
				<div className="swiper-container">
			        <div className="swiper-wrapper">
			         	{arr}
			        </div>
			  	  <div className="swiper-pagination"></div>
			    </div>
			</div>
			
		)
	}
}

export default Banner;
