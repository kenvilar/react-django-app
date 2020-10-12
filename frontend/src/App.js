import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <div>
        <form action="" onSubmit={handleSubmit} noValidate>
          <label htmlFor="char-input">How many characters does</label>
          <input type="text" id='char-input'/>
          <button type='submit'>have?</button>
        </form>
      </div>
      <div>
        <h3 id='char-count'></h3>
      </div>
    </div>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  const text = document.querySelector('#char-input').value;

  axios.get(`/char_count?text=${text}`)
    .then(({data}) => {
      document.querySelector(
        '#char-count').textContent = `${data.count} characters!`;
    })
    .catch(err => console.log(err));
}

export default App;
