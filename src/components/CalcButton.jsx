import React from 'react';

function CalcButton({ text, isfunctionButton }) {
  return (
    <button
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
