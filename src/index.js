import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import LandingHome from './modules/landing/home.js';

const ApplicationRoutes = () => {
    return <Routes>
        <Route path="/" element={<LandingHome />} />
    </Routes>;
}

const LandingRoutes = () => {
    return <Routes>
        <Route path="/" element={<LandingHome />} />
    </Routes>;
}

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" index element={<LandingHome />} />
        </Routes>
    </BrowserRouter>
, document.getElementById("root"));