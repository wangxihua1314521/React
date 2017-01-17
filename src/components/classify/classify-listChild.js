import {Link} from "react-router";
class ClassifyListChild extends React.Component{
	render(){
		let info = this.props.info;
		//console.log(info)
		//console.log(this.props.info.introduction.length)
		let intro = info.introduction;
		if(intro.length>24){
			intro = String(intro).substring(0,20)+"..."
		}
		return (
			
			<figure>
			<Link to="/details">
				<img src={info.src} alt=""/>
				<figcaption>
					{intro}
				</figcaption>
				<b>{info.price}</b>
			</Link>
			</figure>
			
		)
	}
	
}

export default ClassifyListChild;
	
	