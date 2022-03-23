import { React, useContext } from 'react';
import CalculatorContext from '../context/CalculatorContext';

function CalcButton({ text, isfunctionButton, isAnswerButton, isClearButton }) {
  const { doChangeDigit, doCalculateAnswer, doClearScreen } =
    useContext(CalculatorContext);
  const handleSubmit = () => {
    isAnswerButton
      ? doCalculateAnswer()
      : isClearButton
      ? doClearScreen()
      : doChangeDigit(text);
  };
  return (
    <button
      onClick={handleSubmit}
      type='button'
      style={{ height: '50px' }}
      className={`flex-1 ${
        isfunctionButton
          ? 'text-white bg-gray-900'
          : isClearButton
          ? 'text-white bg-red-500 hover:bg-red-800'
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
  isAnswerButton: false,
  isClearButton: false,
};
export default CalcButton;
