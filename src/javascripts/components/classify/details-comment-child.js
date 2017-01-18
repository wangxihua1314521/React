
class DetailsCommentChild extends React.Component{
	render(){
		return (
			<li>
				<p>{this.props.propChildData.name}</p>
				<p>{this.props.propChildData.content}</p>
				<span>{this.props.propChildData.time}</span>
			</li>
		)
	}
}

export default DetailsCommentChild;