import { useNavigate } from 'react-router-dom';
import './styles/App.css';

function App() {
  const nav = useNavigate();

  return (
    <div className="App">
      <h1>Вход в систему</h1>
      <form>
        <div>
          <label>Логин</label><input/>
        </div>
        <button onClick={()=>nav('/News')}>Войти</button>
      </form>
    </div>
  );
}

export default App;
