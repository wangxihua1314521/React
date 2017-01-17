//压缩使用
var webpack = require('webpack');
//抽离
var ET = require('extract-text-webpack-plugin');

module.exports = {
	//不写./会报错
	entry: __dirname + '/src/app.js',
	output: {
		//__dirname:当前文件夹
		path: __dirname + '/bundle/',
		//filename:'bundle-[hash].js'
		filename: 'bundle.js'
	},
	devtool:'source-map',
	module:{
		loaders:[
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test:/\.scss$/,
				//loader:'style!css!sass'
				loader:ET.extract('style','css!sass')
			},
			{
				test:/\.string$/,
				loader:'string'
			},
			{
                test: /\.js[x]?$/,        //检测以什么结尾的文件
                exclude: /node_modules/,  //排除某文件夹
                loader: ['babel'],        //使用什么模块来编译
                //配置
                query: {
                    presets: [
                        "es2015",
                        "react",
                        "stage-2"
                    ],
                    plugins: [
                        'transform-runtime',
                        'transform-es2015-classes',
                        'transform-class-properties'
                    ]
                }
            }
		]
	},

	devServer:{
		contentBase: __dirname + '/bundle',
		port:80,
		host:'localhost',
		proxy:{
			'/api':{
				target:'http://localhost:9000',
				pathRewrite:{
					'^/api':''
				}
			}
		}
	},
	
	plugins:[
		new webpack.optimize.UglifyJsPlugin(),
		new ET('bundle.css')
	]
	
}
