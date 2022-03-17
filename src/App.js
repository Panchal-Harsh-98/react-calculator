import Title from './components/Title';
import Screen from './components/Screen';
import ButtonPanel from './components/ButtonPanel';
function App() {
  return (
    <div className='container'>
      <div>
        <Title></Title>
        <Screen></Screen>
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
