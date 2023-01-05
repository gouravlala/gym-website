import './App.css';
import Hero from './Component/hero/Hero';
import Plans from './Component/Plans/Plans';
import Programes from './Component/Programes/Programes';
import Reasons from './Component/Reasons/Reasons';

function App() {
  return (
    <div className="App">
        <Hero/>
        <Programes/>
        <Reasons/>
        <Plans/>
    </div>
  );
}

export default App;
