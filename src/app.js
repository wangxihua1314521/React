//引入样式
import "./styles/app.scss";
//react全局样式

//引入组件
//购物车
import Cart from "./components/cart/cart";
//分类页
import Classify from "./components/classify/classify";
//中部
import Home from "./components/home/home";
//头尾部
import Layout from "./components/layout/layout";

//个人中心
import Personal from "./components/personal/personal";
//引入初始size
import {initialSize} from "./utils/common";
initialSize();
//路由配置的核心API
import {Router,Route,hashHistory} from "react-router";

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

ReactDOM.render(
	<Router routes={routes} history={hashHistory}/>
,document.getElementById("app"));
