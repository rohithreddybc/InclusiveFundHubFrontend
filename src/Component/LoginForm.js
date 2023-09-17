import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
    

  const paperStyle = {padding:20, height:'70vh', margin:"20px auto"}
  
  const handleNavigateToSignUpStudent = () => {
    navigate('/register');
  };

  const handleChange = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    localStorage.setItem('userName',e.target.value)
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
   const handleNavigateToSignUpDonor = () => {
    navigate('/registerDonorForm');
  };
  
  


  return (
    <div>
      <h2>Login</h2>
      <form className="login-form" method="post" action='http://localhost:8080/login'>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      
      <div>
        <button className="button" type="submit" onClick={handleNavigateToSignUpStudent}>Sign Up as Student</button>
        <button className="button" type="submit" onClick={handleNavigateToSignUpDonor}>Sign Up as Donor</button>
      </div> 
      </form>     
    </div>
  );
}

export default LoginForm;
