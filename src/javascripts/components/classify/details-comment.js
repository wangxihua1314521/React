import DetailsCommentChild from "./details-comment-child";

class DetailsComment extends React.Component{
	render(){
		const prop = this.props.dCommentData;
		const propChild = prop.com;
		let dCommentChild = [];
		for(let i=0; i<propChild.length; i++){
			dCommentChild.push(
				<DetailsCommentChild propChildData={propChild[i]} />
			)
		}
		return (
			<div className="details_comment">
				<summary>
					商品评价
					<span>
						{prop.total}
					</span>
				</summary>
				<ul>
					{dCommentChild}
				</ul>
				<a>
					全部评价
				</a>
			</div>
		)
	}
}

export default DetailsComment;