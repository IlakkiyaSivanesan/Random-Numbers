import React from "react";
import './App.css';
function Result ({randomNumbers,term}) {
    let result;
    if (term) {
    if(term > randomNumbers) {
        result = 'Higher'
    }
    else if (term < randomNumbers) {
        result = 'Lower'
    }
    else if (term == randomNumbers) {
        result = 'Correct'
    }
    else {
        result = "Enterr valid input"
    }
}


    return <h3 >You guessed : {result}</h3>
}



export default Result;