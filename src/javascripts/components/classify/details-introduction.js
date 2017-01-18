
class DetailsIntroduction extends React.Component{
	render(){
		return (
			<div className="details_introduction">
				<article>
					<b>{this.props.dIntroductionData.price}</b>
					<del>{this.props.dIntroductionData.del}</del>
					<p>{this.props.dIntroductionData.title}</p>
					<span>{this.props.dIntroductionData.warn}</span>
				</article>
				<ul>
					<li>
						<em>优惠券</em>
						<span>{this.props.dIntroductionData.discount}</span>
						
					</li>
					<li>
						<em>满额免</em>
						<span>{this.props.dIntroductionData.manemian}</span>
						
					</li>
					<li>
						<em>红包</em>
						<span>{this.props.dIntroductionData.redpacket}</span>
						
					</li>
				</ul>
			</div>
		)
	}
}

export default DetailsIntroduction;