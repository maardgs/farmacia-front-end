import { House } from "@phosphor-icons/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  let navigate = useNavigate()


  return (
    
      <div className="w-full bg-teal-600 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">
            <Link to="/home" className="text-1xl font-bold uppercase">
              <House size={32} />
            </Link>
          </div>
          <div className="flex gap-4">
            <Link to="/categoria" className="hover:underline">
            Categoria
            </Link>
            <Link to="/cadastrarcategoria" className="hover:underline">
            Cadastrar Categoria
            </Link>
            <div className="flex justify-center "></div>
          </div>
        </div>
      </div>
    );

 
}

export default Navbar;
