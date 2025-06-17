const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

const PATHS = require('./PATHS');
const CONSTANTS = require('./CONSTANTS');

module.exports = {

    externals: {
        paths: PATHS
    },

    output: {
        filename: `${PATHS.assets}js/[name].[hash].js`, 
        path: PATHS.dist, 
        publicPath: '', // '/dist'
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },

    devServer: { // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        hot: true,
        liveReload: false,
    },
    
    module: {
        rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, 
        {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, 
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
            }
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, 
                {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
                }, 
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        }, 
        {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
                }
            ]
        }
        
        ]
    },
    plugins: [

        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[hash].css`, 
            //chunkFilename: '[id].css',
        }),


        
        // new HtmlWebpackPlugin({
        //     template: `${PATHS.src}/index.html`, 
        //     filename: './index.html', 
        // }),


        new CopyWebpackPlugin([
            { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
            { from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts` },
            { from: `${PATHS.src}/static`, to: '' },
        ]),

        new CleanWebpackPlugin(),

        new webpack.DefinePlugin({
            'IS_READY': JSON.stringify( true ),
            // 'HOST_TO_API_SERVER': JSON.stringify( CONSTANTS.LOCAL_HOST ),

        }),


    ]
}