import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
//import "/App.css";

function StudentHome() {
  const [status, setStatus] = useState('Loading...');
  const navigate = useNavigate();
  

  useEffect(() => {
    fetch('/api/student/status')  
      .then(response => response.json())
      .then(data => {
        setStatus(data.status);
      })
      .catch(error => {
        console.error('There was an error fetching the status!', error);
      });
  }, []);

  return (
    <>
      <h1>Student Home Page</h1>
      <div className="button-group">
        <button onClick={() => { navigate('/student/studentRequestFund') }}>Request Fund</button>
      </div>
    </>
  );
}

function FundHistoryPage() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    fetch('/api/student/fund-history') 
      .then(response => response.json())
      .then(data => {
        setHistoryData(data.history);
      })
      .catch(error => {
        console.error('There was an error fetching the fund history!', error);
      });
  }, []);

  return (
    <>
      <h1>Fund History</h1>
      <table>
        <thead>
          <tr>
            <th>Donor Name</th>
            <th>Amount Donated</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((record, index) => (
            <tr key={index}>
              <td>{record.donorName}</td>
              <td>{record.amount}</td>
              <td>{record.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default StudentHome;