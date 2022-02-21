import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}

export default App;
