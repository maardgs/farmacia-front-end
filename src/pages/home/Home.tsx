import React from "react";
import "./Home.css";
import { Pill } from "@phosphor-icons/react";

function Home() {
  return (
    <>
      <div className="bg-teal-600 flex justify-left">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <div className="flex-items-left">
              <h2 className="text-4xl font-bold">Farmácia Pistache </h2> 
                <Pill className="ml-4 size-11"/>
               </div>
            <p className="text-xl">
              Aqui você encontra os melhores preços e o melhor atendimento!
            </p>
            <div className="flex justify-around gap-4">
              <button className="rounded bg-white text-teal-600 py-2 px-4">
                Nossos Produtos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
