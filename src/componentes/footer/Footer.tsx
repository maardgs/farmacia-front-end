import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <>
    <div className="flex items-center space-x-100 text-base px-10 pb-5">
        <h2>Veja mais produtos!</h2>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>

        <div className="mt-2 flex -space-x-2 overflow-hidden">
          
    <img className=" h-10 w-10 rounded-full ring-3 ring-white" src="https://epocacosmeticos.vteximg.com.br/arquivos/ids/504317/sauvage-eau-de-toilette-dior-perfume-masculino-30ml-refilavel-7.jpg?v=637965351105930000" alt="perfume"/>
    <img className=" h-10 w-10 rounded-full ring-3 ring-white" src="https://cdn.iset.io/assets/70914/produtos/173/3fb4e9c85d572848fcc5f43c19160b01653e596a5e677.png" alt="maquiagem"/>
    <img className=" h-10 w-10 rounded-full ring-3 ring-white" src="https://cdn.awsli.com.br/123/123552/produto/13040103/design-sem-nome--5--aia62u0kfc.png" alt="fralda"/>
    <img className="h-10 w-10 rounded-full ring-3 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="cabelo"/>
    <img className=" h-10 w-10 rounded-full ring-3 ring-white" src="https://d3ddx6b2p2pevg.cloudfront.net/Custom/Content/Products/10/88/1088563_daaz-vitamina-c-tripla-acao-30-comprimidos-efervescentes_z1_637631663157731430.jpg" alt="vitaminas"/>
    
  </div>
  <div className="mt-3 text-sm font-medium">
    <a href="#" className="text-green-800 ">+ 198 others</a>
  </div>
</div>
     <div className="flex justify-center text-green-800 bg-slate-100">
        <div className="container flex flex-col items-center py-100">
          <p className="text-xl font-bold">Farmácia Pistache | Copyright: MR </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <LinkedinLogo size={40} weight="bold" />
            <InstagramLogo size={40} weight="bold" />
            <FacebookLogo size={40} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
