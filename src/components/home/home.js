import Banner from "./banner";
import HomeList from "./home-list";
import Main from "./main";

class Home extends React.Component{
	render(){
		return (
			<div className="home">
				<Banner/>
				<Main/>
				<HomeList/>
			</div>
		)
	}
}

export default Home;