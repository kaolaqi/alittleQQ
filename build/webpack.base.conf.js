var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var SpritesmithPlugin = require('webpack-spritesmith')
var PreloadPlugin = require('preload-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test')
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json','.css','.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@style': resolve('src/style'),
      '@app': resolve('src/component/app')
    
    }
  },
  externals:{
    'UE':'UE',
    'vue': 'Vue'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },{
        test:/\.s[a|c]ss$/,
        // use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
        loader:'style!css!postcss!sass'
      }
    ]
  },

  plugins:[
    //雪碧图
    new SpritesmithPlugin({
        src: {
            cwd: path.resolve(__dirname, '../src/images/sprites'),
            glob: '*.png'
        },
        target: {
            image: path.resolve(__dirname, '../src/images/sprite.png'),
              css: path.resolve(__dirname, '../src/style/sprite.css'),
        },
        apiOptions: {
           cssImageRef: '../images/sprite.png',
        },
        spritesmithOptions: {
            algorithm: 'binary-tree',
            padding:15,
        }
      }),

    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    /*new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    )*/
  ]
}
