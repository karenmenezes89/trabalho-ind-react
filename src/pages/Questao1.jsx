import { useState } from 'react';
import { Link } from 'react-router-dom';

function Questao1() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`container ${isDarkTheme ? 'dark-theme' : ''}`}>
      <Link 
        to="/"
        className="btn back-btn"
      >
        ← Voltar para o inicio
      </Link>
      
      <div className="question-container">
        <h2> - Alternar Tema - </h2>
        <p>Clique no botão abaixo para alternar entre tema claro e escuro:</p>
        
        <button 
          className="btn"
          onClick={toggleTheme}
        >
          {isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
        </button>
      </div>
    </div>
  );
}

export default Questao1;