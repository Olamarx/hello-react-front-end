import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
