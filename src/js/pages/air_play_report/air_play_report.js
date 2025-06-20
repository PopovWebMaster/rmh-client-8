// air_play_report


import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './../../redux/store.js';

import './air_play_report.scss';

import { PlayReportApp } from './components/PlayReportApp/PlayReportApp.js';

console.dir('air_play_report');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <PlayReportApp />
        </BrowserRouter>
    </Provider>
);
