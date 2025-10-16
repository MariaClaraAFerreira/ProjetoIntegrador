import Image from "next/image";
import Header from "./componentes/header";
import Caixa from "./componentes/caixa";
import Sobre_nos from "./componentes/sobre_nos";
import Footer from "./componentes/footer";
import Cardprodutos from "./componentes/cardprodutos";
import Carrossel from "./componentes/carrossel";

export default function Home() {
  return (
    <div className="h-full w-full bg-[#CDECF9] flex-col justify-center items-center ">
      <div className="">
        <Header />
      </div>

      <div className="mt-34">
        <Caixa />
      </div>
      <div className="mt-40">
        <Carrossel />
      </div>
      <div className="mt-20">
        <Cardprodutos />
      </div>

      <div className="flex justify-center items-center mt-10"></div>

      <Sobre_nos />
      <Footer />
    </div>
  );
}
