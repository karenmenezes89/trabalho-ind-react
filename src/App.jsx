import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Questao1 from './pages/Questao1';
import Questao2 from './pages/Questao2';
import Questao3 from './pages/Questao3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questao1" element={<Questao1 />} />
        <Route path="/questao2" element={<Questao2 />} />
        <Route path="/questao3" element={<Questao3 />} />
      </Routes>
    </Router>
  );
}

export default App;
