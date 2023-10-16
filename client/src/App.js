// import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

// components
import Header from './components/Header/Header'
function App() {
  return (
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  );
}

export default App;
