import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import '../public/debug.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'; 
import '../public/vendor/bulma.min.css';
import '../public/custom.css';

ReactDOM.render( 
    <React.StrictMode >
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);