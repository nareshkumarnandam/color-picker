import React from 'react';
import { GetColorName } from 'hex-color-to-color-name';
import './App.css';

const App = () => {

  function randomColor(){
    let codeFigures = "0123456789abcdef";
    let hexCode = "#";
    for(let i = 0 ; i < 6 ; i++){
        let randomCode = Math.floor( Math.random() * codeFigures.length );
        hexCode += codeFigures[randomCode];
        
    }
  
    console.log(hexCode);
    return hexCode;
}
randomColor();
  const divs = [];

  for (let i = 0; i < 30; i++) {
    let color = randomColor();
    let colorName = GetColorName(color);
    divs.push(<div className='eachDiv' key={i}>
      <div className='colorPallette' style={{backgroundColor : color}}></div>
      <p className='hexCode' onClick={() => {
            navigator.clipboard.writeText(color);
            alert("Copied to clipboard");
            // console.log(navigator);
        }} >{color}</p>
      <p style={{color: color}}>{colorName}</p>
    </div>);
  }

  return (
    <div className='contaier'>
      <h1>Color Picker</h1>
      <div className='App'>
        {divs}</div>

    </div>
  );
}

export default App; 