import ClassifyListChild from "./classify-listChild";

var ClassifyList = React.createClass({
	getDefaultProps:function(){
		return{
			"url":"/api/classify-list"
		}
	},
	getInitialState:function(){
		return{
			"result":""
		}
	},
	componentWillMount:function(){
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
	},
	render: function(){
		let article = [];
		let result = this.state.result;
		
		if(result){
			for(let i=0; i<result.length; i++){			//console.log(result[i])
				article.push(
					<ClassifyListChild info={result[i]}/>
				)
				
			}
		}
		return (
			<div id="classify-list">
				<header>
					<i className="iconfont">&#xe7ec;</i>
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
});
module.exports = ClassifyList;