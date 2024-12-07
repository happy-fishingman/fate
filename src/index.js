import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignInSide from './sign-in-side/SignInSide';
import SignUp from './sign-in-side/SignUpSide';
import DashBoard from './dashboard/Dashboard';
import Hospitalboard from './dashboard/Hospitalboard';
import Hospitalboard_ana from './dashboard/Hospitalboard_ana';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* 登录页面路由 */}
        <Route path="/" element={<SignInSide />} />

        {/* 注册页面路由 */}
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashboard" element={<DashBoard />} />

        <Route path="/hospitalboard" element={<Hospitalboard />} />
        <Route path="/hospitalboard/analytics" element={<Hospitalboard_ana />} />

      </Routes>
    </Router>
  </React.StrictMode>,
);
