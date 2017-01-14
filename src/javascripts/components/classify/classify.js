//分类页
import ClassifyList from "./classify-list";
var Classify = React.createClass({
	getDefaultProps:function(){
		return {
			"url":"http://localhost:9000/classify"
		}
	},
	getInitialState:function(){
		return {
			"result":"",
			"className":""
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
		var result = this.state.result.all;
		if(result){
			for(var i in result){
				arr.push(
						<div style={styles.icoboxs}>
							<div style={styles.icobox}>
								<img src={result[i].img1} style={styles.imgs}/>
								<div style={styles.tip}>{result[i].title1}</div>
							</div>
							<div style={styles.icobox}>
								<img src={result[i].img2} style={styles.imgs}/>
								<div style={styles.tip}>{result[i].title2}</div>
							</div>
							<div style={styles.icobox}>
								<img src={result[i].img3} style={styles.imgs}/>
								<div style={styles.tip}>{result[i].title3}</div>
							</div>
						</div>
					)
			}
			
		}
		return (
			<div style={styles.flbox}>
				<ul style={styles.ulbox} id="oUl">
					<li style={styles.libox} className="active">酒类</li>
					<li style={styles.libox}>白酒</li>
					<li style={styles.libox}>葡萄酒</li>
					<li style={styles.libox}>洋酒</li>
					<li style={styles.libox}>果酒</li>
					<li style={styles.libox}>其他</li>
					<li style={styles.libox}>酒具</li>
					<li style={styles.libox}>黄酒</li>
					<li style={styles.libox}>啤酒</li>
					<li style={styles.libox}>保健酒</li>
				</ul>
				<div style={styles.divRight}>
					<div>
						<div style={styles.tit}>白酒</div>
							{arr}
					</div>
				</div>
			</div>
		)
	}
});
module.exports = Classify;
