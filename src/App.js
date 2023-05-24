
import './App.css';
import Navii from "./Nav";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AgregarLibro from './AgregarLibro';
import ListaLibros from './listalibros';
import EditarLibro from './EditarLibro';


function App() {
  return (
    <div className="App">
      <Navii/>
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListaLibros />} />
            <Route path="/agregar" element={<AgregarLibro />} />
             <Route path='/edit/:id' element={<EditarLibro/>}/>
          </Routes>
        </BrowserRouter>
      </header>
      </div>
  );
}
    
export default App;
