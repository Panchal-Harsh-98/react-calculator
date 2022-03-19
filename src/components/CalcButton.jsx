import { React, useContext } from 'react';
import CalculatorContext from '../context/CalculatorContext';

function CalcButton({ text, isfunctionButton }) {
  const { doChangeDigit } = useContext(CalculatorContext);
  const handleSubmit = () => {
    doChangeDigit(text);
  };
  return (
    <button
      onClick={handleSubmit}
      type='button'
      style={{ height: '50px' }}
      className={`flex-1 ${
        isfunctionButton
          ? 'text-white bg-gray-900'
          : 'text-blue-600  hover:bg-gray-800 hover:text-white'
      } `}
    >
      {text}
    </button>
  );
}

CalcButton.defaultProps = {
  text: 'button',
  isfunctionButton: false,
};
export default CalcButton;
