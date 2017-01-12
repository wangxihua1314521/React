var Main = React.createClass({
	getDefaultProps:function(){
		return {
			"url":"http://localhost:9000/main"
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
				arr.push(<div style={styles.mainimg}>
					<img src={result[i].Url} style={styles.imgs}/>
					<div>{result[i].title}</div>
				</div>)
			}
		}
		return (
			<div>
				<div style={styles.mainbox}>
					{arr}
				</div>
				<div style={styles.scrollbox}>
					<img src="./img/scroll_top.jpg" style={styles.scroll}/>
					<span>新人专享199大礼包,注册立即领取&gt;&gt;&gt;</span>
				</div>
			</div>
		)
	}
});
module.exports = Main;