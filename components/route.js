var Router = (function() {
	var unCompMount = function(arr){
		for(var i=0;i<arr.length;i++){
			ReactDOM.unmountComponentAtNode(document.getElementById(arr[i]));
		}
	}
	var onCompMount = function(obj){
		for(var attr in obj){
			var req = require(obj[attr]);
//			console.log(req);
			ReactDOM.render(React.createElement(req),document.getElementById(attr));
		}
	}
	var map_key = {
		"/index":{
			"unmount":["banner","main","list"],
			"onmount":{
				"banner":"./banner",
				"main":"./main",
				"list":"./list"
			}
		},
		"/classify":{
			"unmount":["banner","main","list"],
			"onmount":{
				"list":"./classify"
			}
		},
		"/cart":{
			"unmount":["banner","main","list"],
			"onmount":{
				"list":"./cart"
			}
		},
		"/center":{
			"unmount":["banner","main","list"],
			"onmount":{
				"list":"./center"
			}
		}
	}
	route = function(ev){
		var _href = ev.target.getAttribute("href");
		console.log(_href);
		for(var attr in map_key){
			if(_href == attr){
				var mount = map_key[attr];
				var unmount = mount.unmount;
				//卸载组价
				unCompMount(unmount);
				var onmount = mount.onmount;
				//添加组件
				onCompMount(onmount);
			}
		}
	}
	return {
		router:route
	}
})();

module.exports = Router;
