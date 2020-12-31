// 引入路径
const path = require("path");
// 引入自动生成html
const HTMLWEbpackPlugin = require('html-webpack-plugin');
// 自动删除dist文件夹下的旧文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack 中所有的配置信息都应该写在 module.exports 之中
module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",
  // 指定打包文件所在路径
  output: {
    path: path.resolve(__dirname, "dist"),
    // 打包后文件名
    filename: "bundle.js",
    // 告诉webpack不适用箭头函数，因为webpack打包之后默认会使用一个自调用的箭头函数来创建作用域。
    // 如果要兼容ie的话箭头函数就要报错(我们写的箭头函数会通过babel转换，但是 webpack 自己的箭头函数就需配置 arrowFunction 为false)
    environment: {
      // 告诉webpack不适用箭头函数
      arrowFunction: false,
      // 不使用const
      const:false
    }
  },
  // 指定 webpack 打包时使用的模块
  module: {
    // 指定加载规则
    rules: [
      {
        // test 指定的是 规则生效文件
        test: /\.ts$/,
        // 要使用的 loader --使用 ts-loader 去打包以ts结尾的文件
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义环境
              presets: [
                [
                  // 制定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的浏览器
                    targets: {
                      "chrome": "78",
                      "ie": "11"
                    },
                    // corejs的版本
                    "corejs": "3",
                    // 使用 corejs 的方式 “usage” 镖师按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          "ts-loader"
        ],
        // 要排除的文件
        exclude: /node_modules/
      },
      // 设置less文件的处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 引入postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader",
        ]
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWEbpackPlugin({
      // title:'这是一个自定义的title'
      template: "./src/index.html"
    }),
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }

};