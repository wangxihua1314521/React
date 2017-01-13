
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
				<img src={info.src} alt=""/>
				<figcaption>
					{intro}
				</figcaption>
				<b>{info.price}</b>
			</figure>
			
		)
	}
	
}

export default ClassifyListChild;
	
	