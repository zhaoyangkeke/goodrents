const path = require('path')
const webpack = require('webpack')
const mockApi = require('./mock/mock.js')

const { HotModuleReplacementPlugin,DefinePlugin } = webpack

let config = {
    mode:process.env.NODE_ENV,
    entry:{
        bundle:path.join(__dirname,'src/main.js')
    },
    output:{
        filename:'[name].js',
        publicPath:'/dist',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:'babel-loader'
            },{
                test:/\.css$/,
                use:['style-loader','css-loader']
            },{
                test:/\.(sass|scss)$/,
                use:['style-loader','css-loader','sass-loader']
            },{
                test: /\.(jpg|png|gif|jpeg|ttf|woff|woff2|svg|eot)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        historyApiFallback:true, // 支持history路由
        host:'localhost',
        port:8000,
        open:true,
        hot:true,
        before(app){
            mockApi(app)
        },
        proxy: {
            "/api": {
                target: "https://m.haozu.com",
                changeOrigin:true,
                pathRewrite: {"^/api" : ""}
            }
        }
    },
    optimization:{ // 设置压缩
        minimize:process.env.NODE_ENV == 'production'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    plugins:[
        new DefinePlugin({
            'test':"'1604A'"
        })
    ],
    devtool:'cheap-module-eval-source-map'
}
if(process.env.NODE_ENV == 'production'){
    
}
else{
    config.plugins = (module.exports.plugins || []) && config.plugins.concat([new HotModuleReplacementPlugin()])
}
module.exports = config