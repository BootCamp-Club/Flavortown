import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner.js';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <Banner />
        <NavBar data-testid={"Nav-Bar-Is-Here"} />

      </header>
      <body></body>
    </div>
  );
}

export default App;
