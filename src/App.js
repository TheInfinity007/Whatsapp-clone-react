import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
    return (
        // BEM naming  convention
        <div className="app">
            <div className="app__body">
                <Router>
                    <Sidebar />
                    <Routes>
                        <Route path="/rooms/:roomId" element={<Chat />} />
                        <Route path="/" element={<Chat />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
