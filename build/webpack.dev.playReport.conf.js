
const webpack =  require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = require('./PATHS');

const CONSTANTS = require('./CONSTANTS');

const devWebpackConfig = merge( baseWebpackConfig, {

    mode: 'development',
    devtool: 'cheap-module-eval-source-map',

    entry: {
        main: `${PATHS.src}/js/main/main.js`, 
        playReport: `${PATHS.src}/js/pages/playReport/playReport.js`, 
    },


    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        port: 8081,
        overlay: {
            warnings: true,
            errors: true
        },
       
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin( 
            {
                filename: '[file].map'
            } 
        ),
        new webpack.DefinePlugin({
            'IS_DEVELOPMENT': JSON.stringify( true ),
            'IS_PRODUCTION': JSON.stringify( false ),
            'HOST_TO_API_SERVER': JSON.stringify( CONSTANTS.LOCAL_HOST ),

        }),


        new HtmlWebpackPlugin({
            template: `${PATHS.src}/html/playReport.html`,
            filename: './index.html', 
        }),

    ]
} );

module.exports = new Promise( ( resolve, reject ) => {
    resolve( devWebpackConfig )
} );