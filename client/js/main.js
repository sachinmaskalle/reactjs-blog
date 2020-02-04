import React from 'react';
import ReactDOM from 'react-dom';

import MainComponent from './components/main/main.component';

let appElement = document.getElementById('root');

if (!appElement) {
    console.log('Unable to find App Element to Bootstrap the Application');
} else {

    ReactDOM.render(<MainComponent />, appElement);

    console.log('Application Bootstrapped Successfully !....');
}