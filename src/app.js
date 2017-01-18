//引入样式
import "./styles/app.scss";
//引入组件
//购物车
import Cart from "./javascripts/components/cart/cart";
//订单
import Indent from "./javascripts/components/indent/indent";
//分类页
import Classify from "./javascripts/components/classify/classify";
//列表页
import ClassifyList from "./javascripts/components/classify/classify-list"; 
//详情页
import Details from "./javascripts/components/classify/details";
//中部
import Home from "./javascripts/components/home/home";
//头尾部
import Layout from "./javascripts/components/layout/layout";
//个人中心
import Personal from "./javascripts/components/personal/personal";
//登录
import Login from "./javascripts/components/login/login";
//注册
import Register from "./javascripts/components/register/register";
//引入初始size
import {initialSize} from "./javascripts/utils/common";
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
	path:"/classify-list",
	component:ClassifyList
},{
	path:"/cart",
	component:Cart
},{
	path:"/register",
	component:Register
},{
	path:"/login",
	component:Login
},{
	path:"/indent",
	component:Indent
},{
	path:"/personal",
	component:Personal
},{
	path:"/details",
	component:Details
}]




ReactDOM.render(
	<Router routes={routes} history={hashHistory}/>
,document.getElementById("app"));
