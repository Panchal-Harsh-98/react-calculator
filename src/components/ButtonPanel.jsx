import { React, useContext } from 'react';
import CalcButton from '../components/CalcButton';
import CalculatorContext from '../context/CalculatorContext';

function ButtonPanel() {
  const { setDigit } = useContext(CalculatorContext);

  return (
    <div className='flex flex-row flex-wrap'>
      <div className='w-full flex'>
        <CalcButton text={7} />
        <CalcButton text={8} />
        <CalcButton text={9} />
        <CalcButton text={1} isfunctionButton />
      </div>
      {/*  */}
      <div className='w-full flex'>
        <CalcButton text={4} />
        <CalcButton text={5} />
        <CalcButton text={6} />
        <CalcButton text={1} isfunctionButton />
      </div>
      {/*  */}
      <div className='w-full flex'>
        <CalcButton text={1} />
        <CalcButton text={2} />
        <CalcButton text={3} />
        <CalcButton text={1} isfunctionButton />
      </div>
      {/*  */}
      <div className='w-full flex'>
        <CalcButton text={'.'} />
        <CalcButton text={0} />
        <CalcButton text={1} />
        <CalcButton text={1} isfunctionButton />
      </div>
      {/*  */}
      <CalcButton text={'Answer'} isfunctionButton />
    </div>
  );
}

export default ButtonPanel;
