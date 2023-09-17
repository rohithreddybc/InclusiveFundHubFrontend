import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Component/LoginForm';
import RegisterForm from './Component/RegisterForm';
import RegisterDonorForm from './Component/RegisterDonorForm';
import StudentRequestFund from './Component/StudentRequestFund';
import DonorHome  from './Component/DonorHome';
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/registerDonorForm" element={<RegisterDonorForm />} />
        <Route path="/student/studentRequestFund/" element={<StudentRequestFund />} />
        <Route path="/donor" element={<DonorHome />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
