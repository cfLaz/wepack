//this is default file name for wich webpack will look for
//webpack runs on node.js syntax

const path = require('path'); //node.js import syntax
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // mode key tells webpack wheteer it should apply some optimizations
    entry: './src/index.js', //where webpack should start its "journey"
    output: { //where to put generated output,
        path: path.resolve(__dirname, 'dist'),//absolute path where output should be written to
        filename:'bundle.js',
        chunkFilename: '[id].js',
        publicPath:'',
    } ,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'cheap-module-eval-source-map', // defines how source maps are generated, helps us with debugging when we run our original code
    module: {
        rules: [
            {
                test: /\.js$/, //any file with .js will be affected by this rule
                loader: 'babel-loader', //tells webpack which tool takes over this file
                exclude: /node-modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ //for multiple loaders
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options:{
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }},
                    // help us with processing css code (automatically prefixes it for an example - transforms the css code so it works in older browser
                    {loader: 'postcss-loader', options: {
                        ident: 'postcss',// !^ plugins we want to run in our css code, another pugin we havr to install
                        plugins: () => [autoprefixer()]
                    }}
                ]
            },
            {     //url loader needs file loader to be installed     8k KB
                test: /.(png|jpe?g|gif)$/, loader: 'url-loader?limit=8000&name=images/[name].[ext]', //save it in images folder in 'dist'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: __dirname+ '/src/index.html',
            filename: 'index.html',
            inject: 'body',
        })
    ]
};