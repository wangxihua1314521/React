var ListChild =require("./listChild");
var List = React.createClass({
	getDefaultProps:function(){
		return {
			"url":"http://localhost:9000/list"
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
		var arr2 = [];
		var arr3 = [];
		var result = this.state.result;
		if(result){
			for(var i in result.jspt){
				arr.push(<div style={styles.bx}>
						<img src={result.jspt[i].img01} style={styles.bannerimg}/>
						<img src={result.jspt[i].img02} style={styles.bannerimg}/>
					</div>)	
			}
			for(var i in result.lists){
				arr2.push(<ListChild name={result.lists[i]}/>);	
			}
			for(var i in result.logo){
				arr3.push(<div style={styles.mainimg}>
						<img src={result.logo[i].url} style={styles.imgs}/>
						<div>{result.logo[i].title}</div>
					</div>)
			}
		}
		return (
			<div >
				{arr}
				<div style={styles.bgbox}>
					<div style={styles.big}><img src="./img/list01.jpg" style={styles.bjgimg}/></div>
					<div style={styles.bigright}>
						<img src="./img/list05.jpg" style={styles.bjgimg}/>
						<img src="./img/list06.jpg" style={styles.bjgimg}/>
					</div>
				</div>
				<div style={styles.bgbox}>
					<div style={styles.big}><img src="./img/list02.jpg" style={styles.bjgimg}/></div>
					<div style={styles.bigright}>
						<img src="./img/list07.jpg" style={styles.bjgimg}/>
						<img src="./img/list08.jpg" style={styles.bjgimg}/>
					</div>
				</div>
				<div style={styles.listbox}>
					{arr2}
				</div>
				<div style={styles.mainbox}>
					{arr3}
				</div>
			</div>
		)
	}
});
module.exports = List;