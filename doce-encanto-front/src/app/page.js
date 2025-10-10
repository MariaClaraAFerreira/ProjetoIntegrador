import Image from "next/image";
import Header from "./componentes/header";
import Caixa from "./componentes/caixa";
import Sobre_nos from "./componentes/sobre_nos";
import Footer from "./componentes/footer";
import Categoria from "./componentes/categoria";
import Cardprodutos from "./componentes/cardprodutos";

export default function Home() {
  return (
    <div className="h-full w-full bg-[#CDECF9] flex-col justify-center items-center ">
      <div className="">
      <Header/>
      </div>
      <div className="mt-34">
      <Caixa/>
      </div>


      <div className="flex justify-center items-center mt-10">
      <Categoria/>
      
      </div>

      <Sobre_nos/>
      <Footer/>

      
      
    </div>
  );
}
