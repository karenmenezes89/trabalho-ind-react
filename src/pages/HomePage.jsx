import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      <div className="header">
        <h1>Por onde deseja começar?</h1>
        <p>Escolha uma das questões abaixo para navegar:</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Link 
          to="/questao1"
          className="nav-button"
        >
         - Tema Claro/Escuro -
        </Link>
        
        <Link 
          to="/questao2"
          className="nav-button"
        >
          - Mensagem de Boas-Vindas -
        </Link>
        
        <Link 
          to="/questao3"
          className="nav-button"
        >
          - Lista de Tarefas -
        </Link>
      </div>
    </div>
  );
}

export default HomePage;