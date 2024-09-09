import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="bg-white">
      <p className="text-xl flex justify-center bg-slate-100 text-green-800 px-5 py-4">
      <span className="hidden md:inline">Aqui você encontra os melhores preços e o melhor atendimento! </span>
      <span className="inline md:hidden">Melhores preços e Melhor atendimento</span>
      </p>

      <div className="fflex flex-col sm:flex-row items-stretch gap-4 px-4 py-4">
        <Link to="/categoria">
          <button className="rounded bg-white text-green-800 hover:text-[#388d65] py-2 px-4">
            Saúde e Bem-estar
          </button>
          <button className="rounded bg-white text-green-800 hover:text-[#388d65] py-2 px-4">
            Mamãe e Bebê
          </button>
          <button className="rounded bg-white text-green-800 hover:text-[#388d65] py-2 px-4">
            Cabelos
          </button>
          <button className="rounded bg-white text-green-800 hover:text-[#388d65] py-2 px-4">
            Serviços
          </button>
        </Link> 
        <Link to="/cadastrarcategoria">
            <button className="rounded text-green-800 hover:text-[#388d65] py-2 px-4">
              +Categorias
            </button>
          </Link>
        </div>

        
         
       <div>
        <h1 className="flex justify-center font-bold text-[#fa3737] px-5 py-2">OFERTAS</h1>
       </div>
      

     
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 m-8">
        
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
          <img
            src="../../src/assets/Fraldas.jpeg"
            alt="Produto 1"
            className="w-45 h-45 object-cover aspect-square rounded-md"
          />
          <h3 className="text-lg font-bold text-center mt-2">Fralda Pampers </h3>
          <h2 className="text-lg font-bold text-center mt-2 text-green-800" >R$ 89,90</h2>
          <p className="text-center">Confort Sec M 112 unidades
          Pampers Confort Sec</p>
        </div>

       
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
          <img
            src="../../src/assets/buscopan.jpeg"
            alt="Produto 2"
            className="ww-45 h-45 object-cover aspect-square rounded-md"
          />
          <h3 className="text-lg font-bold text-center mt-2">Buscopan Composto</h3>
          <h2 className="text-lg font-bold text-center mt-2 text-green-800" >R$ 19,90</h2>
          <p className="text-center">Butilbrometo de Escopolamina 10mg + Dipirona Sódica 250mg 20 comprimidos</p>
        </div>

        
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
          <img
            src="../../src/assets/Shampoo.jpeg"
            alt="Produto 3"
            className="w-45 h-45 object-cover aspect-square rounded-md"
          />
          <h3 className="text-lg font-bold text-center mt-2">Kit Shampoo + Condicionador Océane</h3>
          <h2 className="text-lg font-bold text-center mt-2 text-green-800" >R$ 62.99</h2>
          <p className="text-center">Kit Shampoo + Condicionador Para Cabelos Cacheados 2 Produtos</p>
        </div>

        
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
          <img
            src="../../src/assets/vitaminacrosto.jpeg"
            alt="Produto 4"
            className="w-45 h-45 object-cover aspect-square rounded-md"
          />
          <h3 className="text-lg font-bold text-center mt-2">Sérum Principia</h3>
          <h2 className="text-lg font-bold text-center mt-2 text-green-800" >R$ 39,90</h2>
          <p className="text-center">VC-10 Vitamina C 10% + Ácido Ferúlico Antioxidante 30ml Principia 30g</p>
        </div>

        
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
          <img
            src="../../src/assets/Sabonete.jpeg"
            alt="Produto 5"
            className="w-45 h-45 object-cover aspect-square rounded-md"
          />
          <h3 className="text-lg font-bold text-center mt-2">Sabonete em Barra Glicerina Granado Rosa</h3>
          <h2 className="text-lg font-bold text-center mt-2 text-green-800" >R$ 10,90</h2>
          <p className="text-center">Sabonete em barra de glicerina vegetal e Fragrância especial Granado Rosa antioxidante 90g</p>
        </div>

       
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
          <img
            src="../../src/assets/redoxon.jpeg"
            alt="Produto 6"
            className="w-45 h-45 object-cover aspect-square rounded-md"
          />
          <h3 className="text-lg font-bold text-center mt-2">Vitamina C Efervescente Redoxon</h3>
          <h2 className="text-lg font-bold text-center mt-2 text-green-800" >R$ 22,90</h2>
          <p className="text-center">Redoxon Tripla Ação é um suplemento alimentar com Vitamina C, D e Zinco sabor laranja, com nutrientes que auxiliam no fortalecimento do sistema imune contra vírus, infecções, mudanças climáticas e estresse.</p>
        </div>

        
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
          <img
            src="../../src/assets/protetorsolar.jpeg"
            alt="Produto 7"
            className="w-45 h-45 object-cover aspect-square rounded-md"
          />
          <h3 className="text-lg font-bold text-center mt-2">Protetor Solar La Roche Posay</h3>
          <h2 className="text-lg font-bold text-center mt-2 text-green-800" >R$ 109,90</h2>
          <p className="text-center">O Anthelios Hydraox, de La Roche-Posay, é um protetor solar anti-idade com FPS 60, que oferece cuidado diário com uma fórmula completa, indicado para: pele mista, normal ou seca. Sua textura é fluida ultra leve.</p>
        </div>

        
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
          <img
            src="../../src/assets/Shampoo1.jpeg"
            alt="Produto 8"
            className="w-45 h-45 object-cover aspect-square rounded-md"
          />
          <h3 className="text-lg font-bold text-center mt-2">Shampoo Haskell Jaborandi 300ml</h3>
          <h2 className="text-lg font-bold text-center mt-2 text-green-800" >R$ 89,90</h2>
          <p className="text-center">O Shampoo Jaborandi da Haskell é especialmente formulado para cabelos oleosos, revitalizando os fios e combatendo a queda. Enriquecido com Extrato de Carqueja, Extrato de Jaborandi, Extrato de Hortelã e Vitamina A, controla a produção sebácea, reduzindo a oleosidade excessiva do couro cabeludo.</p>
        </div>

       
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
          <img
            src="../../src/assets/Pastadedente.jpg"
            alt="Produto 9"
            className="w-45 h-45 object-cover aspect-square rounded-md"
          />
          <h3 className="text-lg font-bold text-center mt-2">Pasta de Dente Colgate Tripla Ação Menta Original 180g</h3>
          <h2 className="text-lg font-bold text-center mt-2 text-green-800" >R$ 3,90</h2>
          <p className="text-center">Creme dental tripla ação menta original 180g</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
