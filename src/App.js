
import './App.css';
import { Navbar } from './components/Navbar';
import { Shop } from './components/Shop';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
        <Shop/>
      </header>
    </div>
  );
}

export default App;
