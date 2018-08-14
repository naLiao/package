//webpack配置文件，也是一个js的文件，module.exports是common.js的语法，对象包括了所有的配置\\
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:'./src/app.js',  //入口文件
    output:{  //输出
        path: path.resolve(__dirname,'dist/'),  //打包到哪里
        filename: 'assets/js/app.js',  //打包后的文件名
        publicPath: '/'  //所有资源的基础路径，必须以/结尾
    },
    mode: 'development',
    plugins:[  //插件，是一个数组
        new htmlWebpackPlugin({
            filename: 'index.html',  //打包后的html文件名，可以同时制定输出路径，../表示从输出文件夹中跳出
            template: 'src/index.html'  //以现有的html为模板
        }),
        new cleanWebpackPlugin(['dist'])
    ],
    module:{  //模板引入之前的预处理模块，css、图片都被webpack看作模块
        rules:[  //数组中从最后依次往前执行
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',  //引入babel-loader，将es6转为es5，jsx语法转为js语法 
                        // options:{  //对babel-loader进行配置，配置较多也可以全部写在.babelrc文件中
                        //     presets:['react']
                        // }
                    }
                ],
                exclude:[path.resolve(__dirname,'node_modules')]  //排除该目录的文件不需要babel-loader处理
            },
            {
                test:/\.css$/,
                use:[  //没有配置，可以只写一个字符串形式，不必用对象形式
                    'style-loader',  //将编译后的样式插入到html结构中，style标签中;loader处理顺序从右向左
                    // 'css-loader'  //处理css中的url，自动引入需要引入的模块
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,  //css是否模块化
                            localIdentName: '[path]-[name]-[local]_[hash]:base64:6'  //默认是'[hash]:base64'，path:文件夹名，name:css文件名，local:类名，6:指定长度
                        }
                    }
                ]
            },
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            module:true,
                            localIdentName: '[name]-[local]_[hash:base64:6]'  //在css这里实现模块化
                        }
                    },
                    'scss-loader']  //将scss转为css
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',  //url-loader也是处理文件，会将图片变成base64编码
                        options: {
                            limit: 10000,  //当资源小于10000byte(10KB)时才转为编码，否则交给file-loader处理，相当于增强版file-loader
                            name: 'assets/img/[name]_[hash:6].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.(ttf|eot|woff|woff2|svg)$/,  //匹配的时候自动忽略?后面的
                use:[
                    {
                        loader: 'file-loader',  //1.把资源移到输出目录，重命名 2.返回该图片加载路径
                        options: {
                            name: 'assets/fonts/[name]_[hash:6].[ext]'  //ext是后缀名，该规则匹配字体，都放在fonts目录下
                        }
                    }
                ]
            }
        ]
    },
    devServer:{  //webpack-dev-server是webpack提供的服务器，可以运行代码，本地不会生成文件，文件打包放进内存里，更新文件会刷新页面
        open:true,  //自动在浏览器中打开
        port:9000,  //设置端口
        contentBase: './src/common',
        publicPath: '/'  //服务器打包资源的输出路径
    }
}