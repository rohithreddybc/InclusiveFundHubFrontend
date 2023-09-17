import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function StudentRequestFund(){
  
    const [funds, setFunds] = useState(0.0)
   const [studEmail, setStudEmail] = useState('aadon004@fiu.edu')
    const [reasonForFunding, setReason] = useState('')
    const [gpa, setGpa] = useState()
    const API_UNIVERSITY_URL = 'http://localhost:8080/student/request';
    const navigate = useNavigate();
    const handleChange = (val) => {
        setFunds(val.target.value)
    }

    const handleFundRequest = async () => {
        try{
            const request = {
                "username": "aadon004@fiu.edu",
                "fundingReason":reasonForFunding,
                "fundingAmount":parseFloat(funds),
                "gpa":gpa
            }
            const response = await axios.post(API_UNIVERSITY_URL, request)
            console.log(response.data)
            if (response.status === 200) {
                alert("Email Send To University,Redirecting to Login Screen");
                navigate("/");    
            }
            return response.data
            
        } catch( error ){
            console.error("We are receiving the following error in handleFundRequest() "+ error)
            throw error
        }
    }

    const handleReasonChange = (val) => {
        console.log("The handleReasonChange() is called ")
        setReason(val.target.value)
    }

    const handleGpaChange = (val) => {
        console.log("The handleGpaChange() is called ")
        setGpa(val.target.value)
    }


    

    return (
        <>  
            <div>
                <h2>Request Funds</h2>
                
                <label>Funds Required: </label>
                <input
                    type="text"
                    id="funds"
                    name="funds"
                    value={funds}
                    onChange={handleChange}
                    required
                    ></input>
                <label>Reason: </label>
                <input 
                    type="text"
                    id="funding-reason"
                    name="funding-reason"
                    value={reasonForFunding}
                    onChange={handleReasonChange}
                    required></input>
                <label>GPA: </label>
                <input
                    type="text"
                    id="gpa"
                    name="gpa"
                    value={gpa}
                    onChange={handleGpaChange}
                    required
                    ></input>
                <button type="submit" onClick={handleFundRequest}>Request Fund</button>
                
            </div>
        </>
    );
}

export default StudentRequestFund;