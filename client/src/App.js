// import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

// components
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{marginTop:54}}>
        <Home />
      </Box>
    </BrowserRouter>
  );
}

export default App;
