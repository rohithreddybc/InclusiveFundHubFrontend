import React, { useState } from 'react';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterForm() {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [universityName, setUniversityName] = useState('FIU')
    const [universityId, setUniversityId] = useState('')
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();

    const handleNavigateToSignInPage = () => {
        navigate('/');
    };

    const handlesubmitRegistration = async() => {
        try{
          const request = createFormRequest()
        const response = await axios.post("http://localhost:8080/user/create", request);
        console.log("The request is " + response)
        localStorage.setItem("userName", userName)
           navigate("/");
        } catch( error ){
            console.error("We are receiving the following error in handleFundRequest() "+ error)
            throw error
        }
      };

    const createFormRequest = () => {
        try{
            console.log(selectedValue);
            const request = {
                "name": name,
                "userName": userName,
                "password": password,
                "confirmPassword": confirmPassword,
                "phoneNumber": phoneNumber,
                "universityName": universityName,
                "universityId": universityId,
                "role":"ROLE_STUDENT",
                "race": selectedValue,
                "active":true,
                "minority":true
            }
            return request
        } catch ( error ) {
            console.log("The error in createFormRequest is " + error)
        }
    }

      const handleNameChange = async(value) => {
        try{
            setName(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
      };

      const handleUserNameChange = async(value) => {
        try{
            setUserName(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
      };
          
      const handlePasswordChange = async(value) => {
        try{
            setPassword(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
      };

      const handleConfirmPasswordChange = async(value) => {
        try{
            setConfirmPassword(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
      };

      const handlePhoneNumberChange = async(value) => {
        try{
            setPhoneNumber(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
      };

      const handleUniversityNameChange = async(value) => {
        try{
            setUniversityName(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
      };

      const handleUniversityIdChange = async(value) => {
        try{
            setUniversityId(value.target.value)
        } catch( error ){
            console.error('Error retrieving data using handleUsername() ', error)
            throw error
        }
      };

      const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
      };

    return (

        <div>
        <h2>Register</h2>
       <div className="register-form">
            <p style={{color:"red"}}>* indicates the required fields</p>

            <div>
            <label htmlFor="name">Full Name*</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                required
            />
            </div>

            <div>
            <label htmlFor="userName">Educational Email*</label>
            <input
                type="text"
                id="userName"
                name="userName"
                value={userName}
                onChange={handleUserNameChange}
                required
            />
            </div> 

            <div>
            <label htmlFor="password">password*</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
            />
            </div> 

            <div>
            <label htmlFor="confirmPassword">confirm password*</label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
            />
            </div> 

            <div>
            <label htmlFor="phoneNumber">Phone Number*</label>
            <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
            />
            </div> 
                      
            <div>
            <label htmlFor="universityName">University Name*</label>
            <input
                type="text"
                id="universityName"
                name="universityName"
                value={universityName}
                onChange={handleUniversityNameChange}
                required
                diabled
            />
            </div>           
            <div>
            <label htmlFor="universityId">University ID*</label>
            <input
                type="text"
                id="universityId"
                name="universityId"
                value={universityId}
                onChange={handleUniversityIdChange}
                required
            />
            </div>    

            {/* <label htmlFor="race">Identify your race (you can choose more than one if applicable)*</label> */}
            <label>Identify your race (you can choose more than one if applicable)*</label>
            <select value={selectedValue} onChange={handleDropdownChange}>
                        id="race"
                        name="race"
                        required
                        multiple // Allow multiple selections
                    
                        <option value=""> </option>
                        <option value="AIAN">American Indian or Alaska Native</option>
                        <option value="AN">Asian</option>
                        <option value="BAA">Black or African American</option>
                        <option value="NHPH">Native Hawaiian or Other Pacific Islander</option>
                        <option value="Wh">White</option>
                    </select>
           
            
            <button type="submit" onClick={handlesubmitRegistration}>Submit</button>
        <div>
            </div>
            <button type="submit" onClick={handleNavigateToSignInPage}>Cancel</button>
        </div>
        </div>

    )
}

 export default RegisterForm;