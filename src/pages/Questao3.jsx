import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TaskList({ tasks, onRemove }) {
  if (tasks.length === 0) {
    return (
      <p style={{ marginTop: '30px', color: '#666', fontStyle: 'italic' }}>
        Nenhuma tarefa adicionada ainda. Adicione uma tarefa acima!
      </p>
    );
  }

  return (
    <div className="task-list">
      <h3>Suas Tarefas ({tasks.length}):</h3>
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <span>{task.text}</span>
          <button
            className="remove-btn"
            onClick={() => onRemove(task.id)}
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}

function Questao3() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tarefas')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const trimmed = inputValue.trim();
    if (trimmed !== '') {
      setTasks([...tasks, { id: Date.now(), text: trimmed }]);
      setInputValue('');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="container">
      <Link to="/" className="btn back-btn">
        ← Voltar para o início
      </Link>

      <div className="question-container">
        <h2>Lista de Tarefas</h2>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            className="input-field"
            placeholder="Digite uma tarefa..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <br />
          <button className="add-btn" onClick={addTask}>
            Adicionar
          </button>
        </div>

        <TaskList tasks={tasks} onRemove={removeTask} />
      </div>
    </div>
  );
}

export default Questao3;