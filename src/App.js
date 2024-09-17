import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// dependencias
import { Login } from './components/Login'
import { Lista } from './components/Lista'
import { Seguimiento } from './components/Seguimiento'

function App() {
  return (
    // creacion de rutas
    <BrowserRouter>
      <Routes>
        {/* inicial login */}
        <Route path='/' element={<Login />} />
        <Route path='/lista' element={<Lista />} />
        <Route path='/seguimiento/:id' element={<Seguimiento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
