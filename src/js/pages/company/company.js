
import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// import store from './../../App/redux/store.js';
import store from './../../redux/store.js';

import './company.scss';

import { CompanyPageApp } from './components/CompanyPageApp/CompanyPageApp.js';

console.dir('company');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <CompanyPageApp />
        </BrowserRouter>
    </Provider>
);
