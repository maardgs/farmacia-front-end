import { House } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container flex justify-between text-lg">
      <div className="w-full bg-teal-600 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">
            <Link to="/home" className="text-1xl font-bold uppercase"><House size={32}/></Link></div>
          <div className="flex gap-4">
            <div className="hover:underline">Produtos</div>
              <div className="hover:underline">Cadastrar Produto</div>

            <Link to='/categoria' className="hover:underline"> Categoria </Link>
            <Link to='/categoria' className="hover:underline"> Cadastrar Categoria </Link>

            <div className="flex justify-center ">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
