import { Basket, House, LinuxLogo, Pill } from "@phosphor-icons/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();

  return (
    <div className="w-full bg-green-800 text-white flex justify-center px-5 py-4">
      <div className="container flex flex-wrap justify-between items-center text-lg">
        
        <div className="text-xl md:text-2xl font-bold uppercase">
          <Link to="/home" className="text-white font-bold uppercase flex items-center">
            <h2 className="text-3xl md:text-5xl font-bold">Pistache</h2>
            <Pill className="ml-2 md:ml-5" size={35} />
          </Link>
        </div>
        
        
        <div className="flex flex-wrap items-center gap-4 md:gap-8 w-full md:w-auto mt-4 md:mt-0">
       
          <div className="flex-grow flex justify-center order-2 md:order-none w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Pesquisar..." 
              className="w-full md:w-80 px-4 py-2 rounded-full text-black" 
            />
          </div>
          
          
          <div className="flex gap-4 md:gap-8 order-1 md:order-none w-full md:w-auto justify-center md:justify-start">
            <Link to="/categoria" className="hover:bg-green-900 text-white">
              Categoria
            </Link>
            <Link to="/categoria" className=" text-white hover:bg-green-900">
              Produto
            </Link>
            <Link to="/categoria" className=" text-white hover:bg-green-900">
              Sobre
            </Link>
            <Link to="/cadastrarcategoria" className="hover:bg-green-900 text-white">
            <span className="hidden md:inline">Nova Categoria </span>
            <span className="inline md:hidden">+</span>
            </Link>
            <Link to="/home"><Basket size={32} color="#fafafa" /> </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
