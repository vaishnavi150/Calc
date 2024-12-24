import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Caution: Avoid eval in production apps
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ['C', 'DEL', '/', '*'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '.'],
    ['0', '=']
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="button-row">
            {row.map((button) => (
              <button
                key={button}
                className={button === '=' ? 'equal' : button === 'C' || button === 'DEL' ? 'action' : ''}
                onClick={() => handleClick(button)}
              >
                {button}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="footer">Calc by Vaishnavi</div>
    </div>
  );
};

export default Calculator;
