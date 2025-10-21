// This is the main JavaScript entry point for the application.
// It initializes the app and may include logic to render components and handle events.

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Header from './components/header';

const App = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to My Web Project</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));