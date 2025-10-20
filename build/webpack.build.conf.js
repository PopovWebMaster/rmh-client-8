const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const webpack = require('webpack');


const PATHS = require('./PATHS');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',

    entry: {
        main: `${PATHS.src}/js/main/main.js`, 
        home: `${PATHS.src}/js/pages/home/home.js`,
        admin: `${PATHS.src}/js/pages/admin/admin.js`,
        login: `${PATHS.src}/js/pages/login/login.js`, 
        company: `${PATHS.src}/js/pages/company/company.js`, 

        air_main:           `${PATHS.src}/js/pages/air_main/air_main.js`, 
        air_schedule:       `${PATHS.src}/js/pages/air_schedule/air_schedule.js`, 
        air_application:    `${PATHS.src}/js/pages/air_application/air_application.js`, 
        air_layout:         `${PATHS.src}/js/pages/air_layout/air_layout.js`, 
        air_play_report:    `${PATHS.src}/js/pages/air_play_report/air_play_report.js`, 
        air_logs:           `${PATHS.src}/js/pages/air_logs/air_logs.js`, 
        air_files:           `${PATHS.src}/js/pages/air_files/air_files.js`, 










        // home: `${PATHS.src}/js/pages/home/home.js`,
        // logs: `${PATHS.src}/js/pages/logs/logs.js`,
        // applications: `${PATHS.src}/js/pages/applications/applications.js`,
        
        // mainPage: `${PATHS.src}/js/pages/mainPage/mainPage.js`, 
        // schedule: `${PATHS.src}/js/pages/schedule/schedule.js`, 
        // playReport: `${PATHS.src}/js/pages/playReport/playReport.js`, 
        // accessIsClosed: `${PATHS.src}/js/pages/accessIsClosed/accessIsClosed.js`, 
        // pageNotFound: `${PATHS.src}/js/pages/pageNotFound/pageNotFound.js`, 
        // layout: `${PATHS.src}/js/pages/layout/layout.js`, 



        


    },


});

