
import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './../../redux/store.js';

import './air_application.scss';

import { AirApplicationApp } from './components/AirApplicationApp/AirApplicationApp.js';

console.dir('air_application');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <AirApplicationApp />
        </BrowserRouter>
    </Provider>
);
