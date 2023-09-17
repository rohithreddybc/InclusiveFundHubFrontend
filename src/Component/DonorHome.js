import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


 function DonorHome() {
    const [arrData, setArrData] = useState([])
    
    function handleConfirmation(){

        const value = document.getElementById("confirmationField").innerHTML
        console.log("The handleConfirmation() is called and value is " + value )
        if( value == 'confirm' ){
            document.getElementById("confirmationField").innerHTML = "Funded"
            document.getElementById("confirmationField").style.background = "Green"
        } 
    }
    useEffect( ()=>{

        async function fetchData() {

     try{
        const values = await axios.get("http://localhost:8080/donor/getAllStudents")
        console.log(values.data)
        setArrData(values.data)
            }catch(error){
                console.error('Error fetching data:', error);
            }
        }
    }, []);

    let rowList = [];

    
    if (arrData.length > 0) {
        arrData.forEach((arrVal, index) => {
          if (
            arrVal != null &&
            arrVal.fundingAmount != null &&
            arrVal.fundingAmount != undefined &&
            arrVal.fundingAmount > 0
          ) {
            rowList.push(
              <tr key={index} >
                <td>{arrVal.name}</td>
                <td>{arrVal.fundingAmount}</td>
                <td>{arrVal.universityName}</td>
                <td>{arrVal.gpa}</td>
                <td>{arrVal.reasonForFunding}</td>
                <td>
                  <button onClick={handleConfirmation} id="confirmationField">
                    confirm
                  </button>
                </td>
              </tr>
            );
          }
        });
      }
      
      return (
        < >
          <h2>Donor Home Page</h2>
          <h2>Student Details</h2>
          <div className="styled-table">
            <table>
              <thead>
                <tr>
                  <th key="student-name">Student Name&nbsp;&nbsp;</th>
                  <th key="amount">Amount&nbsp;&nbsp;</th>
                  <th key="university">University&nbsp;&nbsp;</th>
                  <th key="gpa">GPA&nbsp;&nbsp;</th>
                  <th key="reason">Reason&nbsp;&nbsp;</th>
                  <th key="action">Action&nbsp;&nbsp;</th>
                </tr>
              </thead>
              <tbody>{rowList}</tbody>
            </table>
          </div>
        </>
      );
      
      
}


export default DonorHome;