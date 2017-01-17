//头尾布局
import Footer from "./footer";
import Header from "./header";

class Layout extends React.Component{
	constructor(props){
    	super(props);
  	}
	render(){
		return (
			<div className="layout">
				<Header/>
				<section className="section">
					{this.props.children}
				</section>
				<Footer/>
			</div>
		)
	}
}

export default Layout;