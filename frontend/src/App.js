import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <div>
        <label htmlFor="char-input">How many characters does</label>
        <input type="text" id='char-input'/>
        <button onClick={handleSubmit}>have?</button>
      </div>
      <div>
        <h3 id='char-count'></h3>
      </div>
    </div>
  );
}

function handleSubmit(event) {
  const text = document.querySelector('#char-input').value;

  axios.get(`/char_count?text=${text}`)
    .then(({data}) => {
      document.querySelector(
        '#char-count').textContent = `${data.count} characters!`;
    })
    .catch(err => console.log(err));
}

export default App;
