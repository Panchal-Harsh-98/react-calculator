import { React, useState, useContext } from 'react';
import CalculatorContext from '../context/CalculatorContext';
function Screen() {
  const { digit } = useContext(CalculatorContext);

  return (
    <div className='flex items-center scrnContainer bg-gray-400 p-3 text-6xl justify-end'>
      <p className=''>{digit}</p>
    </div>
  );
}

export default Screen;
