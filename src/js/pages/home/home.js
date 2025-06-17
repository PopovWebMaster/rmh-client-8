import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// import store from './../../App/redux/store.js';
import store from './../../redux/store.js';

import './home.scss';

// import { HomePageApp } from './../../components/HomePageApp/HomePageApp.js';
import { HomePageApp } from './components/HomePageApp/HomePageApp.js';


console.dir('home');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <HomePageApp />
        </BrowserRouter>
    </Provider>
);
