import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Estudar React', 'Lavar os pratos', 'Fazer faxina na casa'];

function App() {
  return (
    <ul>{compromissos.map((compromisso) => Task(compromisso))}</ul>
  );
}

export default App;
