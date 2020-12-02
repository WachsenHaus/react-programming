import smallImage from './small.png';
import bigImage from './big.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={bigImage} alt="big"></img>
      <img src={smallImage} alt="small"></img>
    </div>
  );
}

export default App;
