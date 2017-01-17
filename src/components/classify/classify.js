import ClassifyList from "./classify-list";
import {Link} from "react-router";
var Classify = React.createClass({
	getDefaultProps:function(){
		return {
			"url":"http://localhost:9000/classify"
		}
	},
	getInitialState:function(){
		return {
			"result":"",
		}
	},
	tabChoiced:function(e){
		var Id = e.target.id;
		$('#oUl li').eq(Id).addClass('active').siblings().removeClass('active');
		$('#scrollT').scrollTop($('.classbox').eq(Id).offset().top);
	},
	componentWillMount:function(){
		$('#oUl li').eq(0).addClass('active');
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
		var arr1 = [];
		var arr2 = [];
		var arr3 = [];
		var arr4 = [];
		var arr5 = [];
		var arr6 = [];
		var arr7 = [];
		var arr8 = [];
		var arr9 = [];
		var arr10 = [];
		var result = this.state.result;
		var that = this;
		if(result){
			for(var i in result.tit){
				arr.push(
						<li id={result.tit[i].id} onClick={this.tabChoiced} style={styles.libox}>{result.tit[i].tabName}</li>
					)
			}
		}
		if(result){
			for(var i in result.all){
				arr1.push(
						<div style={styles.icoboxs}>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.all[i].img1} style={styles.imgs}/>
								<div style={styles.tip}>{result.all[i].title1}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.all[i].img2} style={styles.imgs}/>
								<div style={styles.tip}>{result.all[i].title2}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.all[i].img3} style={styles.imgs}/>
								<div style={styles.tip}>{result.all[i].title3}</div>
							</Link>
							</div>
						</div>
					)
			}
			for(var i in result.bj){
				arr2.push(
						<div style={styles.icoboxs}>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.bj[i].img1} style={styles.imgs}/>
								<div style={styles.tip}>{result.bj[i].title1}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.bj[i].img2} style={styles.imgs}/>
								<div style={styles.tip}>{result.bj[i].title2}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.bj[i].img3} style={styles.imgs}/>
								<div style={styles.tip}>{result.bj[i].title3}</div>
							</Link>
							</div>
						</div>
					)
			}
			for(var i in result.ptj){
				arr3.push(
						<div style={styles.icoboxs}>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.ptj[i].img1} style={styles.imgs}/>
								<div style={styles.tip}>{result.ptj[i].title1}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.ptj[i].img2} style={styles.imgs}/>
								<div style={styles.tip}>{result.ptj[i].title2}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.ptj[i].img3} style={styles.imgs}/>
								<div style={styles.tip}>{result.ptj[i].title3}</div>
							</Link>
							</div>
						</div>
					)
			}
			for(var i in result.yj){
				arr4.push(
						<div style={styles.icoboxs}>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.yj[i].img1} style={styles.imgs}/>
								<div style={styles.tip}>{result.yj[i].title1}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.yj[i].img2} style={styles.imgs}/>
								<div style={styles.tip}>{result.yj[i].title2}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.yj[i].img3} style={styles.imgs}/>
								<div style={styles.tip}>{result.yj[i].title3}</div>
							</Link>
							</div>
						</div>
					)
			}
			for(var i in result.gj){
				arr5.push(
						<div style={styles.icoboxs}>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.gj[i].img1} style={styles.imgs}/>
								<div style={styles.tip}>{result.gj[i].title1}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.gj[i].img2} style={styles.imgs}/>
								<div style={styles.tip}>{result.gj[i].title2}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.gj[i].img3} style={styles.imgs}/>
								<div style={styles.tip}>{result.gj[i].title3}</div>
							</Link>
							</div>
						</div>
					)
			}
			for(var i in result.qt){
				arr6.push(
						<div style={styles.icoboxs}>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.qt[i].img1} style={styles.imgs}/>
								<div style={styles.tip}>{result.qt[i].title1}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.qt[i].img2} style={styles.imgs}/>
								<div style={styles.tip}>{result.qt[i].title2}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.qt[i].img3} style={styles.imgs}/>
								<div style={styles.tip}>{result.qt[i].title3}</div>
							</Link>
							</div>
						</div>
					)
			}
			for(var i in result.jj){
				arr7.push(
						<div style={styles.icoboxs}>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.jj[i].img1} style={styles.imgs}/>
								<div style={styles.tip}>{result.jj[i].title1}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.jj[i].img2} style={styles.imgs}/>
								<div style={styles.tip}>{result.jj[i].title2}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.jj[i].img3} style={styles.imgs}/>
								<div style={styles.tip}>{result.jj[i].title3}</div>
							</Link>
							</div>
						</div>
					)
			}
			for(var i in result.hj){
				arr8.push(
						<div style={styles.icoboxs}>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.hj[i].img1} style={styles.imgs}/>
								<div style={styles.tip}>{result.hj[i].title1}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.hj[i].img2} style={styles.imgs}/>
								<div style={styles.tip}>{result.hj[i].title2}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.hj[i].img3} style={styles.imgs}/>
								<div style={styles.tip}>{result.hj[i].title3}</div>
							</Link>
							</div>
						</div>
					)
			}
			for(var i in result.pj){
				arr9.push(
						<div style={styles.icoboxs}>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.pj[i].img1} style={styles.imgs}/>
								<div style={styles.tip}>{result.pj[i].title1}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.pj[i].img2} style={styles.imgs}/>
								<div style={styles.tip}>{result.pj[i].title2}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.pj[i].img3} style={styles.imgs}/>
								<div style={styles.tip}>{result.pj[i].title3}</div>
							</Link>
							</div>
						</div>
					)
			}
			for(var i in result.bjj){
				arr10.push(
						<div style={styles.icoboxs}>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.bjj[i].img1} style={styles.imgs}/>
								<div style={styles.tip}>{result.bjj[i].title1}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.bjj[i].img2} style={styles.imgs}/>
								<div style={styles.tip}>{result.bjj[i].title2}</div>
							</Link>
							</div>
							<div style={styles.icobox}>
							<Link to="/classify-list">
								<img src={result.bjj[i].img3} style={styles.imgs}/>
								<div style={styles.tip}>{result.bjj[i].title3}</div>
							</Link>
							</div>
						</div>
					)
			}
		}
		return (
			<div style={styles.flbox}>
				<ul style={styles.ulbox} id="oUl">
					{arr}
				</ul>
				<div style={styles.divRight} id="scrollT">
					<div id="solbox">
						<div style={styles.tit}>白酒</div>
							<div className="classbox">
								{arr1}
							</div>
							<div className="classbox">
								{arr2}
							</div>
							<div className="classbox">
								{arr3}
							</div>
							<div className="classbox">
								{arr4}
							</div>
							<div className="classbox">
								{arr5}
							</div>
							<div className="classbox">
								{arr6}
							</div>
							<div className="classbox">
								{arr7}
							</div>
							<div className="classbox">
								{arr8}
							</div>
							<div className="classbox">
								{arr9}
							</div>
							<div className="classbox">
								{arr10}
							</div>
					</div>
				</div>
			</div>
		)
	}
})
module.exports = Classify;