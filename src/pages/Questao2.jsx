import { useState } from 'react';
import { Link } from 'react-router-dom';

function Questao2() {
  const [message, setMessage] = useState('Olá!');
  const [hasEntered, setHasEntered] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleEnter = () => {
    setMessage('Seja bem-vindo!');
    setHasEntered(true);
  };

  const resetMessage = () => {
    setMessage('Olá!');
    setHasEntered(false);
  };

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
        <div className="welcome-text">{message}</div>
        
        <button 
          className="btn"
          onClick={handleEnter}
          disabled={hasEntered}
        >
          {hasEntered ? 'Entrou!' : 'Entrar'}
        </button>
        
        {hasEntered && (
          <button 
            className="btn"
            onClick={resetMessage}
            style={{ marginTop: '10px' }}
          >
           Voltar
          </button>
        )}
      </div>
    </div>
  );
}

export default Questao2;
