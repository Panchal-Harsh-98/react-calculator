import Title from './components/Title';
import Screen from './components/Screen';
import ButtonPanel from './components/ButtonPanel';
import { CalculatorProvider } from './context/CalculatorContext';

function App() {
  return (
    <CalculatorProvider>
      <div className='container'>
        <Title></Title>
        <Screen></Screen>
        <ButtonPanel />
      </div>
    </CalculatorProvider>
  );
}

export default App;
