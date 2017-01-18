import ClassifyListChild from "./classify-listChild";
import {Link} from "react-router";

class ClassifyList extends React.Component{
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
				//console.log(res)
				_this.setState({
					"result":res
				})
			}
		});
	}
	render(){
		let article = [];
		let result = this.state.result;
		
		if(result){
			for(let i=0; i<result.length; i++){			//console.log(result[i])
				article.push(
					<ClassifyListChild info={result[i]} po={this.props.location.pathname}/>
				)
				                                                                                                                             
			}
		}
		
		const ls = this.props.location.query.originPath;		
		console.log(ls+".............")		
		if(ls != undefined ){
			console.log(ls+">>>>>>>>")
			sessionStorage.setItem(linkback,ls);		
		}
		let linkback = sessionStorage.getItem(linkback);	
		console.log(linkback+"<<<<<")
		
		return (
			<div id="classify-list">
				<header>
					<i className="iconfont">
						&#xe7ec;
						<Link to={linkback} className="lianjie">
						</Link>
					</i>
					<div>
						<input type="text" placeholder="搜索全部商品..."/>
						<span className="iconfont">&#xe600;</span>
					</div>
					<b>筛选</b>
				</header>
				<nav>
					<ul>
						<li>默认</li>
						<li>价格</li>
						<li>销量</li>
						<li>评价数</li>
						<li><i className="iconfont">&#xe612;</i></li>						
						
					</ul>
					
				</nav>
				<article>
					{article}
				</article>
			</div>//#classify-list end
		)
	}
}

ClassifyList.defaultProps = {
	"url":"/api/classify-list"
};

export default ClassifyList;