import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';
import Home from './pages/home/Home';
import ListaCategorias from './componentes/categorias/listaCategoria/ListaCategoria';


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categoria" element={<ListaCategorias/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;