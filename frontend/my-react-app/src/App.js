import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], 
  datasets: [
    {
      label: '2020',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: '2021',
      data: [2, 3, 5, 7, 11, 13],
      fill: false,
      borderColor: 'rgb(192, 75, 192)',
      tension: 0.1
    }
  ]
}

function fetchData() {
  const apiUrl = process.env.REACT_APP_API_URL;
  axios.get(`${apiUrl}/data`)
    .then(response => console.log(response.data))
    .catch(error => console.error('Error fetching data:', error));
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Line data={data} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
