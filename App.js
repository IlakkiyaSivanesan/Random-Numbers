import {useState} from 'react';
import './App.css';
import Result from './Result';
const randomNumbers = Math.floor(Math.random() *10) + 1;

function App() {
  const [term,setTerm] = useState("")
  const handleChange = (e) => {
    setTerm(e.target.value)
  }



  return (
    <div>
    <div className='topic'>
      <h1>GUESS THE NUMBER</h1>
    </div>

    <div className="box">
      <div className='header'>
        <label htmlFor='term'>Guess the number between 1 to 10: answer : {randomNumbers}</label>
      </div>
      <input id='term' type='text' name='term' onChange={handleChange}/>
      <Result randomNumbers={randomNumbers} term={term}/>
    </div>
    </div>
    
  );
}

export default App;
