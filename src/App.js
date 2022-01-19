import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import EarthPage from './pages/EarthPage'
import SmileyPage from './pages/SmileyPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/earth' exact element={<EarthPage />} />
        <Route path='/smiley' exact element={<SmileyPage />} />
      </Routes>
    </div>
  );
}

export default App;
