import { React, createContext, useEffect, useState } from 'react';
const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [digit, setDigit] = useState(0);

  const doChangeDigit = (newDigit) => {
    var temp = digit + '' + newDigit;
    if (digit === 0) {
      temp = newDigit;
    } else {
      if (newDigit === '.' && digit.toString().includes('.')) {
        return;
      } else {
        temp = digit + '' + newDigit;
      }
    }
    setDigit(temp);
  };

  const doCalculateAnswer = () => {
    console.log('= pressed');
  };

  const doClearScreen = () => {
    setDigit(0);
  };
  return (
    <CalculatorContext.Provider
      value={{
        digit,
        doChangeDigit,
        doCalculateAnswer,
        doClearScreen,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
