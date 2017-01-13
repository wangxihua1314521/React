//路由配置的核心API
import {Router,Route,hashHistory} from "react-router";
	//购物车
import Cart from "../cart/cart.js";
//分类页
import Classify from "../classify/classify";
//中部
import Home from "../home/home";
//头尾部
import Layout from "../layout/layout";
//个人中心
import Personal from "../personal/personal";
class App extends React.Component{


render(){
	//路由的相关配置
const routes = [{
	path:"/",
	component:Layout,//路由开始显示的页面,
	indexRoute:{component:Home},//indexRoute用来进行组件的嵌套，不需要嵌套的话可以不写
	childRoutes:[//这childRoutes里进行子路由的配置，每一个路由都是一个对象,在对象里有path comopent等
		{
			path:"/home",
			component:Home
			//indexRoute:{component:Contain}
		},{
			path:"/classify",
			component:Classify
		}
	]
},{
	path:"/cart",
	component:Cart
},{
	path:"/personal",
	component:Personal
}]
	return (
		
	<Router routes={routes} history={hashHistory}/>
	)
}



}

export default App;