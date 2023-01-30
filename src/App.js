import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent buttonText = "Buttony"/>
        <ImageComponent source="https://picsum.photos/200/300" alter ="..."/>
      </header>
    </div>
  );
}

export default App;
