import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Por favor, inicia sesión para continuar.</h4>
        {/* Aquí cargamos el componente Login */}
        <Login />
      </header>
    </div>
  );
}

export default App;
